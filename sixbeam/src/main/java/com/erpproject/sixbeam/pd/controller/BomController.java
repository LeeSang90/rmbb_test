package com.erpproject.sixbeam.pd.controller;

import com.erpproject.sixbeam.pd.Form.BomForm;
import com.erpproject.sixbeam.pd.dto.BomDto;
import com.erpproject.sixbeam.pd.entity.BomEntity;
import com.erpproject.sixbeam.pd.entity.RitemEntity;
import com.erpproject.sixbeam.pd.service.BomService;
import com.erpproject.sixbeam.pd.service.FitemService;
import com.erpproject.sixbeam.pd.service.RitemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/pd/bom")
@Controller
public class BomController {

    private final BomService bomService;
    private final RitemService ritemService;

    // BOM 데이터 등록 페이지
    @GetMapping("/new")
    public String newBomDto(Model model) {

        BomForm bomForm = new BomForm();
        List<RitemEntity> ritemEntities = ritemService.getRitemList();

        // 등록창 두 줄
        bomForm.getBomDtos().add(new BomDto());
        bomForm.getBomDtos().add(new BomDto());

        model.addAttribute("getitemlist", ritemEntities);

        bomService.readyBomForm(model);
        return "/contents/pd/bom_form";
    }

    // 새 bom 작성
    @PostMapping("/create")
    public ResponseEntity<?> createBomDto(@ModelAttribute BomForm bomForm) {

        return bomService.createBomDto(bomForm);
    }

    // bom 리스트 출력
    @GetMapping("/bomlist")
    public String list(Model model) {

        bomService.getBomList(model);
        return "/contents/pd/bom_list";
    }

    @GetMapping("/detail/{itemCd}")
    public ResponseEntity<List<BomEntity>> detail(@PathVariable("itemCd") String fitemCd) {

        List<BomEntity> bomEntities = bomService.getRitemsByItemCd(fitemCd);
        if (!bomEntities.isEmpty()) {

            return ResponseEntity.ok().body(bomEntities);

        } else {

            return ResponseEntity.notFound().build();
        }
    }

    // 수정
    @PostMapping("/update")
    public String updateBom(@ModelAttribute BomForm bomForm) {

        bomService.updateBomList(bomForm);
        return "redirect:/pd/bom/bomlist";
    }
}