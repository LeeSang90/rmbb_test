package com.erpproject.sixbeam.ac.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name="AC_RECEIVABLES_TB")
public class ReceivablesEntity {
    @Id
    @ManyToOne
    @JoinColumn(name="ACCOUNT_CD")
    private AccountEntity accountEntity;
    @Column(name="RECEIVABLES_SALES")
    private int receivablesSales;
    @Column(name="RECEIVABLES_COLLECT")
    private int receivablesCollect;
    @Column(name="RECEIVABLES_REST")
    private int receivablesRest;

}
