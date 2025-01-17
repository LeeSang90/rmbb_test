package com.erpproject.sixbeam.pd.entity;

import com.erpproject.sixbeam.pd.repository.ItemRepository;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "PD_FITEM_TB")
public class FitemEntity {

    @Id
    @Column(name = "ITEM_CD", insertable = false, updatable = false)
    private String itemCd;

    @Column(name = "ITEM_NM")
    private String itemNm;

    @Column(name = "ITEM_STND")
    private String itemStnd;

    @Column(name = "ITEM_UP")
    private Long itemUp;
}