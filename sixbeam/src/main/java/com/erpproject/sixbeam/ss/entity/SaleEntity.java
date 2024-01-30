package com.erpproject.sixbeam.ss.entity;

import com.erpproject.sixbeam.ss.dto.WmMoveEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="SS_SALE_TB")
public class SaleEntity {

    @Id
    @Column(name = "SALE_CD")
    private String saleCd;
    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "ESTIMATE_CD", referencedColumnName = "ESTIMATE_CD"),
            @JoinColumn(name = "ITEM_CD", referencedColumnName = "ITEM_CD")
    })
    private EstimateEntity estimateEntity;
    @Column(name = "SALE_UPLOAD_DT")
    private LocalDate saleUploadDt;
    @Column(name = "SALE_BILLING_DT")
    private LocalDate saleBillingDt;
    @Column(name = "SALE_BILLING_ST", columnDefinition = "TINYINT(1)")
    private boolean saleBillingSt;
    @Column(name = "SALE_PAYMENT_DT")
    private LocalDate salePaymentDt;
    @ManyToOne
    @JoinColumn(name = "ST_WMMOVE_CD")
    private WmMoveEntity wmMoveEntity;
    @Column(name = "SALE_SHIPPING_ST")
    private String saleShippingSt;
    @Column(name = "SALE_SHIPPING_DT")
    private LocalDate saleShippingDt;

}
