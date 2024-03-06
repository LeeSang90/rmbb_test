// AC에서 사용

function setAccountInfo(accountCd, accountNm , accountNb, accountAdd, accountRep, accountSectors, accountBank, accountAcnb, accountPic, accountEtc)
{
    $('#editAccount').modal('show');
    $('#editAccountCd').val(accountCd);
    $('#editAccountNm').val(accountNm);
    $('#editAccountNb').val(accountNb);
    $('#editAccountAdd').val(accountAdd);
    $('#editAccountRep').val(accountRep);
    $('#editAccountSectors').val(accountSectors);
    $('#editAccountBank').val(accountBank);
    $('#editAccountAcnb').val(accountAcnb);
    $('#editAccountPic').val(accountPic);
    $('#editAccountEtc').val(accountEtc);
}
function registerAccountFinished() {
    alert('거래처가 등록되었습니다.')
}
function editAccountFinished() {
    alert('거래처 정보가 수정되었습니다.');
}
// 선택된 계정 ID를 수집하여 폼에 설정하는 함수
function prepareDelete() {
    // 체크박스의 값(계정 ID)을 저장할 배열
    var selectedIds = [];

    // 모든 'selectedInfo' 클래스를 가진 체크박스를 찾고 선택된 항목의 값만 배열에 추가
    document.querySelectorAll('.selectedInfo:checked').forEach(function(checkbox) {
        selectedIds.push(checkbox.value);
    });

    // 배열을 쉼표로 구분된 문자열로 변환
    var accountIdsToDelete = selectedIds.join(',');

    // 숨겨진 입력 필드에 값을 설정
    document.getElementById('deleteAccountInfo').value = accountIdsToDelete;

    alert('거래처가 삭제되었습니다.');
    // 폼을 제출하여 서버에 삭제 요청을 보냅니다
    document.getElementById('deleteForm').submit();
}

$('#payables').submit(function(e) {
        var accountCd = $('#accountCode').val();
        var accountNm = $('#accountName').val();
        e.preventDefault();

        $.ajax({
            type: $(this).attr('method'), // POST 또는 GET
            url: $(this).attr('action'),
            data: $(this).serialize(), // 폼 데이터 직렬화
            success: function(data) {
                // 결과 데이터를 웹 페이지에 표시하는 코드
                // 예를 들어 테이블의 내용을 업데이트하는 등의 작업을 수행할 수 있습니다.
                $('.accountCode').val(data.accountCode);
                $('.accountName').val(data.accountName);
                $('.basicPayables').val(data.basicPayables);
                $('.payablesSum').val(data.payablesSum);
                $('.paidCash').val(data.paidCash);
                $('.paidSum').val(data.paidSum);
                $('.balance').val(data.balance);
                $('.unclaimedAmount').val(data.unclaimedAmount);
                $('.note').val(data.note);
            },
            error: function(xhr) {
                // 에러 처리 로직
            }
        });
    });
$('#receivables').submit(function(e) {
    var accountCd = $('#accountCode').val();
    var accountNm = $('#accountName').val();
    e.preventDefault();

    $.ajax({
        type: $(this).attr('method'), // POST 또는 GET
        url: $(this).attr('action'),
        data: $(this).serialize(), // 폼 데이터 직렬화
        success: function(data) {
            // 결과 데이터를 웹 페이지에 표시하는 코드
            // 예를 들어 테이블의 내용을 업데이트하는 등의 작업을 수행할 수 있습니다.
            $('.accountCode').val(data.accountCode);
            $('.accountName').val(data.accountName);
            $('.basicReceivables').val(data.basicReceivables);
            $('.receivablesSum').val(data.receivablesSum);
            $('.collect').val(data.collect);
            $('.supplyPrice').val(data.supplyPrice);
            $('.balance').val(data.balance);
            $('.unclaimedAmount').val(data.unclaimedAmount);
            $('.note').val(data.note);
        },
        error: function(xhr) {
            // 에러 처리 로직
        }
    });
});


$("#accountCode").on('input', function() {
        var inputVal = $(this).val();

        $("#accountCodeList option").each(function() {
            if ($(this).val() === inputVal) {
                var accountNm = $(this).text();
                $("#accountName").val(accountNm);
                return false; // 반복문 종료
            }
        });
});



// AC 끝