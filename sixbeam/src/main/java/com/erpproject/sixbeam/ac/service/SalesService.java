package com.erpproject.sixbeam.ac.service;

import com.erpproject.sixbeam.ac.entity.SalesEntity;
import com.erpproject.sixbeam.ac.repository.SalesRepository;
import com.erpproject.sixbeam.ss.entity.SaleEntity;
import com.erpproject.sixbeam.ss.repository.SaleRepository;
import com.erpproject.sixbeam.ss.service.EstimateService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SalesService {
    private final SalesRepository salesRepository;

    public List<SalesEntity> getList() {
        return this.salesRepository.findAll();
    }

    private final SaleRepository saleRepository;
    private final EstimateService estimateService;
    public List<SaleEntity> getSaleList(){
        return this.saleRepository.findBySaleBillingSt(false);
    }

    public int getSaleList(String accountCd){
        return estimateService.getAccountTotal(accountCd);
    }



}
