function formatToKRW(value) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(value);
}

// 테이블의 행 클릭 이벤트 핸들러
$('#detailPurCd[data-id]').on('click', function() {
    console.log($(this).data('id'));
    var purId = $(this).data('id'); // data-id 속성에서 ID 가져오기
    var purDetailUrl = "";
    if(purId.indexOf("OR") !== -1){         //발주 조회에서 선택 했을 때
        purDetailUrl = '/pur/orinput/list/detail/' + purId;
    }
    else if(purId.indexOf("PUR") !== -1){     //구매 조회에서 선택 했을 때
        purDetailUrl = '/pur/input/list/detail/' + purId;
    }
    console.log(purDetailUrl);
    //구매 화면에서 발주선택 모달창의 행 클릭시 모달창 숨기기
    $('#orinputdetail').modal('hide');
    // AJAX 요청
    $.ajax({
        url: purDetailUrl, // 서버 엔드포인트
        type: 'GET',
        success: function(data) {
            console.log(data[0]);
            if (data && data.length > 0) {
                // 성공 시 모달 내용 업데이트
                var modaltBody = $('.formEntry .table.item tbody');
                modaltBody.empty();

                if(purId.indexOf("OR") !== -1){
                    $('#orinputCd').val(data[0].orinputCd);
                    $('#updateCurrentDate').val(data[0].orinputOrDt);
                    $('#updateaccountCode').val(data[0].accountEntity.accountCd);
                    $('#updatename').val(data[0].empInfoEntity.empInfoNm);
                    $('#updateaccountName').val(data[0].accountEntity.accountNm);
                    $('#updateorinputReqDate').val(data[0].orinputReqDt);
                    $('#updateorinputDlvyDate').val(data[0].orinputDlvyDt);
                }
                else if(purId.indexOf("PUR") !== -1){
                    $('#orinputCode').val(data[0].orinputEntity.orinputCd);
                    $('#updateCurrentDate').val(data[0].inputPurDt);
                    $('#updateaccountCode').val(data[0].orinputEntity.accountEntity.accountCd);
                    $('#updatename').val(data[0].orinputEntity.empInfoEntity.empInfoNm);
                    $('#updateaccountName').val(data[0].orinputEntity.accountEntity.accountNm);
                    $('#orinputReqDate').val(data[0].orinputEntity.orinputReqDt);
                    $('#orinputDlvyDate').val(data[0].orinputEntity.orinputDlvyDt);
                    $('#updatewhregistCode').find('option[value="' + data[0].whregistEntity.whregistCd + '"]').prop('selected', true);
                }

                // 데이터 항목별로 행 추가
                data.forEach(function(item, index) {
                    var row = $('<tr>'); // 행 생성
                    if(purId.indexOf("OR") !== -1){
                        // 각 셀에 입력 요소와 name 속성 추가
                        row.append('<td><input type="hidden" name="orinputDtos[' + index + '].orinputCd" class="form-control" value="' + item.orinputCd + '">'+
                        '<input type="hidden" name="orinputDtos[' + index + '].orinputOrDt" class="form-control" value="' + item.orinputOrDt + '">'+
                        '<input type="hidden" name="orinputDtos[' + index + '].accountEntity" class="form-control" value="' + item.accountEntity.accountCd + '">'+
                        '<input type="hidden" name="orinputDtos[' + index + '].empInfoEntity.empInfoId" class="form-control" value="' + item.empInfoEntity.empInfoId+ '">'+
                        '<input type="hidden" name="orinputDtos[' + index + '].orinputReqDt" class="form-control" value="' + item.orinputReqDt + '">'+
                        '<input type="hidden" name="orinputDtos[' + index + '].orinputDlvyDt" class="form-control" value="' + item.orinputDlvyDt + '">'+
                        '<input type="text" class="form-control" name="orinputDtos[' + index + '].itemEntity.itemCd" value="' + item.itemEntity.itemCd + '"></td>');
                        row.append('<td><input type="text" class="form-control itemname" value="' + item.itemEntity.itemNm + '"></td>');
                        row.append('<td><input type="text" class="form-control itemstnd" value="' + item.itemEntity.itemStnd + '"></td>');
                        row.append('<td><input type="text" name="orinputDtos[' + index + '].orinputAmt" class="form-control itemamt" value="' + item.orinputAmt + '"></td>');
                        row.append('<td><input type="text" name="orinputDtos[' + index + '].orinputUp" class="form-control itemup" value="' + formatToKRW(item.orinputUp) + '"></td>');
                        row.append('<td><input type="text" name="orinputDtos[' + index + '].orinputSp" class="form-control itemsp" value="' + formatToKRW(item.orinputSp) + '"></td>');
                        row.append('<td><input type="text" name="orinputDtos[' + index + '].orinputVat" class="form-control itemvar" value="' + formatToKRW(item.orinputVat) + '"></td>');
                        row.append('<td><input type="text" name="orinputDtos[' + index + '].orinputSum" class="form-control itemsum" value="' + formatToKRW(item.orinputSum) + '"></td>');
                        row.append('<td><input type="text" name="orinputDtos[' + index + '].orinputEtc" class="form-control" value="' + item.orinputEtc + '"></td>');
                    }
                    else if(purId.indexOf("PUR") !== -1){
                        row.append('<td><input type="hidden" name="inputPurCd" class="form-control" value="' + item.inputPurCd + '">'+
                        '<input type="hidden" name="inputPrgSt" class="form-control" value="' + item.inputPrgSt + '">'+
                        '<input type="hidden" name="inputSiFl" class="form-control" value="' + item.inputSiFl + '">' +
                        '<input type="text" class="form-control" name="inputDtos[' + index + '].orinputEntity.itemEntity.itemCd" value="' + item.orinputEntity.itemEntity.itemCd + '" readonly></td>');
                        row.append('<td><input type="text" class="form-control itemname" value="' + item.orinputEntity.itemEntity.itemNm + '" readonly></td>');
                        row.append('<td><input type="text" class="form-control itemstnd" value="' + item.orinputEntity.itemEntity.itemStnd + '" readonly></td>');
                        row.append('<td><input type="text" name="inputDtos[' + index + '].orinputAmt" class="form-control itemamt" value="' + item.orinputEntity.orinputAmt + '" readonly></td>');
                        row.append('<td><input type="text" name="inputDtos[' + index + '].orinputUp" class="form-control itemup" value="' + formatToKRW(item.orinputEntity.orinputUp) + '" readonly></td>');
                        row.append('<td><input type="text" name="inputDtos[' + index + '].orinputSp" class="form-control itemsp" value="' + formatToKRW(item.orinputEntity.orinputSp) + '" readonly></td>');
                        row.append('<td><input type="text" name="inputDtos[' + index + '].orinputVat" class="form-control itemvar" value="' + formatToKRW(item.orinputEntity.orinputVat) + '" readonly></td>');
                        row.append('<td><input type="text" name="inputDtos[' + index + '].orinputSum" class="form-control itemsum" value="' + formatToKRW(item.orinputEntity.orinputSum) + '" readonly></td>');
                        row.append('<td><input type="text" name="inputDtos[' + index + '].orinputEtc" class="form-control" value="' + item.orinputEntity.orinputEtc + '" readonly></td>');
                    }

                    modaltBody.append(row); // 생성된 행을 테이블에 추가
                });
                // 모달 표시
                $('#detail').modal('show');
            } else {
                console.error('데이터가 비어있습니다.');
            }
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});

$(document).ready(function() {
    $('#purcddelete').click(function() {
        $('#deletePurModal').modal('hide');
        // 선택 정보의 ID 가져오기
        var selectedPurId = $('#dataTable input[name="selectedPur"]:checked').map(function(){
            return $(this).val();
        }).get();

        // 선택한 ID를 hidden input에 설정
        $('#selectedPur').val(selectedPurId);
        // 폼 제출
        $('.deletePurForm').submit();
    });

    // 폼 제출 이벤트 핸들러
    $('.deletePurForm').submit(function(e) {
        // 폼 제출을 막음
        e.preventDefault();

        // AJAX를 사용하여 폼 데이터 제출
        $.ajax({
            type: $(this).attr('method'), // POST 또는 GET
            url: $(this).attr('action'),
            data: $(this).serialize(), // 폼 데이터 직렬화
            success: function(response) {
                $('#successModal .modal-body').text(response.message);  //controller에서 받은 message 출력
                // 성공 시 리다이렉션
                $('#successModal').modal('show');
                // 모달이 닫힐 때 리다이렉션
                $('#successModal').on('hidden.bs.modal', function () {
                    window.location.href = response.redirectUrl;
                });
            },
            error: function(xhr) {
                // 오류 처리 로직
                var response = JSON.parse(xhr.responseText); // 응답 텍스트를 JSON 객체로 변환
                $('#failModal .modal-body').text(response.message);
                // 오류 메시지 모달 표시
                $('#failModal').modal('show'); // 올바른 셀렉터 사용
                // 모달이 닫힐 때 리다이렉션
                $('#failModal').on('hidden.bs.modal', function () {
                    window.location.href = response.redirectUrl;
                });
                console.log('Error Submitting Form');
            }
        });
    });
});