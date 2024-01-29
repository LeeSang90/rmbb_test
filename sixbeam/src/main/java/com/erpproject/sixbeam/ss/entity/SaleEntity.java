package com.erpproject.sixbeam.ss.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;



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
    @Column(name="ESTIMATE_CD")
    private EstimateEntity estimateEntity;
    @Column(name="SALE_UPLOAD_DT")
    private LocalDate saleUploadDt;
    @Column(name="SALE_BILLING_DT")
    private  LocalDate saleBillingDt;
    @Column(name="SALE_BILLING_ST", columnDefinition = "TINYINT(1)")
    private  boolean saleBillingSt;
    @Column(name="SALE_PAYMENT_DT")
    private  LocalDate salePaymentDt;
    @ManyToOne
    @JoinColumn(name="ST_WMMOVE_CD")
    private WmMoveEntity wmMoveEntity;
    @Column(name="SALE_SHIPPING_ST")
    private String saleShippingSt;
    @Column(name = "SALE_SHIPPING_DT")
    private LocalDate saleShippingDt;

    @OneToOne(mappedBy = "saleEntity", cascade = CascadeType.ALL)
    private SalesEntity salesEntity;

    public SaleEntity(String saleCd,
                      EstimateEntity estimateEntity,
                      LocalDate saleUploadDt, LocalDate saleBillingDt,
                      boolean saleBillingSt, LocalDate salePaymentDt,
                      WmMoveEntity wmMoveEntity, String saleShippingSt,
                      LocalDate saleShippingDt) {
        this.saleCd = saleCd;
        this.estimateEntity = estimateEntity;
        this.saleUploadDt = saleUploadDt;
        this.saleBillingDt = saleBillingDt;
        this.saleBillingSt = saleBillingSt;
        this.salePaymentDt = salePaymentDt;
        this.moveEntity = moveEntity;
        this.saleShippingSt = saleShippingSt;
        this.saleShippingDt = saleShippingDt;
    }


}
