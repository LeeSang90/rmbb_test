package com.erpproject.sixbeam.st;

import com.erpproject.sixbeam.pur.entity.InputEntity;
import com.erpproject.sixbeam.ss.entity.SaleEntity;
import com.erpproject.sixbeam.st.entity.AsEntity;
import com.erpproject.sixbeam.st.service.WhmoveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class StListener {
    private final WhmoveService whmoveService;
    @Autowired
    public StListener(WhmoveService whmoveService) {
        this.whmoveService = whmoveService;
    }

    //[이벤트리스너_As]-----------------------------------------------
    @EventListener
    public void whmoveAsEvent(RowAddedEvent<AsEntity> event) {
        AsEntity asEntity = event.getEntity();
        whmoveService.addRowAs(asEntity);
    }
    //[이벤트리스너_As]-----------------------------------------------

    //[이벤트리스너_Sale]---------------------------------------------
    @EventListener
    public void whmoveSaleEvent(RowAddedEvent<SaleEntity> event) {
        SaleEntity saleEntity = event.getEntity();
        whmoveService.addRowSale(saleEntity);
    }
    //[이벤트리스너_Sale]---------------------------------------------

    //[이벤트리스너_Input]---------------------------------------------
    @EventListener
    public void whmoveInputEvent(RowAddedEvent<InputEntity> event) {
        InputEntity inputEntity = event.getEntity();
        whmoveService.addRowInput(inputEntity);
    }
    //[이벤트리스너_Sale]---------------------------------------------

}
