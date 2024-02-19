(function($) {
    "use strict"; // Start of use strict

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };

        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });


    $(document).ready(function () {
        var activeTabId = localStorage.getItem('activeTabId');  // 활성 탭 ID를 Local Storage에서 읽어옴

        // 초기 로딩 시 저장된 활성 탭 ID를 기준으로 해당 탭을 활성화
        if (activeTabId) {
            $('.tab-pane').removeClass('show').removeClass('active');
            $('#Tap-' + activeTabId).addClass('show').addClass('active');
        }

        // 각 버튼에 대한 클릭 이벤트 처리
        $('[data-tab-id]').click(function () {
            // 모든 탭을 숨기고 클릭한 탭에 대한 사이드바를 보여줌
            $('.tab-pane').removeClass('show').removeClass('active');
            $('#Tap-' + $(this).data('tab-id')).addClass('show').addClass('active');

            // 활성 탭 ID 저장
            activeTabId = $(this).data('tab-id');
            localStorage.setItem('activeTabId', activeTabId);  // 활성 탭 ID를 Local Storage에 저장
        });

        // 각 탭 내부의 링크에 대한 클릭 이벤트 처리
        $('.tab-pane a').click(function () {
            // 저장된 활성 탭을 기준으로 해당 탭을 활성화
            if (activeTabId) {
                $('.tab-pane').removeClass('show').removeClass('active');
                $('#Tap-' + activeTabId).addClass('show').addClass('active');
            }
        });
    });
    $(document).ready(function() {
        $('.addnewrowbtn').click(function() {
            addnewrow();
        });
        $('.deleterowbtn').click(function() {
            deleteLastRow();
        });
    });
    $(document).ready(function() {
        $('#addnewrowbtn').click(function() {
            addnewrow();
        });
        $('#deleterowbtn').click(function() {
            deleteLastRow();
        });
    });

    function addnewrow() {
        // 테이블의 마지막 행을 복제합니다.
        var $lastRow = $('.table.item tbody tr:last');
        var $newRow = $lastRow.clone();

        // 복제된 행의 name 속성에 포함된 인덱스를 증가시킵니다.
        $newRow.find('input, select').each(function() {
            var name = $(this).attr('name');
            if (name) {
                var match = name.match(/(\d+)/);
                if (match) {
                    var index = parseInt(match[0], 10);
                    var newName = name.replace('[' + index + ']', '[' + (index + 1) + ']');
                    $(this).attr('name', newName);
                }
            }

            // 입력 필드의 값을 초기화합니다.
            if($(this).is('input[type="text"]')) {
                $(this).val('');
            } else if($(this).is('select')) {
                $(this).val($(this).find('option:first').val());
            } else if($(this).is('input[type="hidden"]')) {
                // 숨겨진 필드의 처리가 필요한 경우 여기에 로직을 추가
            }
        });

        // 새로운 행을 테이블에 추가합니다.
        $newRow.appendTo('.table.item tbody');
    }

    function deleteLastRow() {
        // tbody 내의 행을 대상으로 선택
        const $tbody = $('.table.item tbody');

        // tbody 내의 행 개수 확인
        const rowCount = $tbody.find('tr').length;

        // 행이 1개만 남았을 때, 모달 표시
        if (rowCount <= 1) {
            $('#cannotDeleteModal').modal('show');
        } else {
            // 그 외의 경우, 마지막 행 삭제
            $tbody.find('tr:last').remove();
        }
    }




})(jQuery); // End of use strict
$(document).ready(function() {
    //id를 currentData로 하면 현재 날짜를 볼러 올 수 있도록 하는 제이쿼리
    $('#currentDate').val(new Date().toISOString().substring(0,10));

    //거래처 코드 선택하면 거래처명이 나올 수 있도록 하는 제이쿼리
    $("#accountCode").on('input', function() {
        var inputVal = $(this).val();
        $("#accountCodeSelectBox option").each(function() {
            if ($(this).val() === inputVal) {
                var accountNm = $(this).text();
                $("#accountName").val(accountNm);
                return false; // 반복문 종료
            }
        });
    });

    //창고 코드 선택하면 창고명이 나올 수 있도록 하는 제이쿼리
    $("#whregistCode").on('input', function() {
        var inputVal = $(this).val();
        $("#whregistCodeSelectBox option").each(function() {
            if ($(this).val() === inputVal) {
                var whregistNm = $(this).text();
                $("#whregistName").val(whregistNm);
                return false; // 반복문 종료
            }
        });
    });
});
//테이블에서 품목 코드 선택하면 폼목명, 단가 불러오고 수량 작성하면 공급가액, 부가세, 총합 계산되도록 하는 제이쿼리
$('.table.item').on('change input', '.selectbox, .itemamt', function() {
    var $row = $(this).closest('tr');
    var itemamt = parseFloat($row.find('.itemamt').val());
    var itemup = parseFloat($row.find('.itemup').val().replace(/[^\d.-]/g, '')); // 숫자가 아닌 문자 제거

    if ($(this).hasClass('selectbox')) { // .selectbox에서의 변경인 경우에만 처리
        var valueitemname = $(this).find(':selected').attr("data-itemNm");
        var valueitmestnd = $(this).find(':selected').attr("data-itemStnd");
        var valueitmeup = parseFloat($(this).find(':selected').attr("data-itemUp")); // 문자열을 숫자로 변환

        $(this).closest('tr').find('.itemname').val(valueitemname);
        $(this).closest('tr').find('.itemstnd').val(valueitmestnd);
        $(this).closest('tr').find('.itemup').val(valueitmeup.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }));
    }

    if (!isNaN(itemamt) && !isNaN(itemup)) {
        var itemsp = itemamt * itemup;
        var itemvar = itemsp * 0.1;
        var itemsum = itemsp + itemvar;

        $row.find('.itemsp').val(itemsp.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }));
        $row.find('.itemvar').val(itemvar.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }));
        $row.find('.itemsum').val(itemsum.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }));
    }
});

$(document).ready(function() {
    calculateTotals();

    // 데이터가 변경될 때마다 합계를 다시 계산합니다.
    // 예를 들어, 행이 추가되거나 삭제될 때, 입력 값이 변경될 때 등
    $('.table.item').on('input', '.itemamt, .itemup, .itemsp, .itemvar, .itemsum', function() {
        calculateTotals();
    });
});
function calculateTotals() {
    var totalAmt = 0, totalUp = 0, totalSp = 0, totalVat = 0, totalSum = 0;

    $('.itemamt').each(function() {
        totalAmt += parseInt($(this).val()) || 0;
    });
    $('.itemup').each(function() {
        var value = $(this).val().replace(/[^\d]/g, '');
        totalUp += parseInt(value) || 0;
    });
    $('.itemsp').each(function() {
        var value = $(this).val().replace(/[^\d]/g, '');
        totalSp += parseInt(value) || 0;
    });
    $('.itemvar').each(function() {
        var value = $(this).val().replace(/[^\d]/g, '');
        totalVat += parseInt(value) || 0;
    });
    $('.itemsum').each(function() {
        var value = $(this).val().replace(/[^\d]/g, '');
        totalSum += parseInt(value) || 0;
    });

    // 계산된 합계를 통화 형식으로 표시
    $('#totalAmt').text(totalAmt);
    $('#totalUp').text(formatCurrency(totalUp));
    $('#totalSp').text(formatCurrency(totalSp));
    $('#totalVat').text(formatCurrency(totalVat));
    $('#totalSum').text(formatCurrency(totalSum));
}

function formatCurrency(value) {
    // 숫자를 지역화된 통화 문자열로 변환 (소수점 없이)
    return "₩" + value.toLocaleString('ko-KR');
}

$(document).ready(function() {
    // 폼이 제출될 때마다 실행되도록 변경
    $('.formEntry').submit(function(e) {
        // 폼 제출을 막음
        e.preventDefault();

        // 입력 필드에서 숫자가 아닌 문자 제거
        $('.itemamt, .itemup, .itemsp, .itemvar, .itemsum').each(function() {
            var value = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(value);
        });

        // 폼 데이터 변경
        var selectedEmp = $('#orinputname').val();
        // 거래처 코드의 현재 값을 가져옴
        var accountCode = $('#accountCode').val();
        // 견적 일자의 현재 값을 가져옴
        var currentDate = $('#currentDate').val();
        // 발주 요청 일자(발주에서 사용)
        var requestDate = $('#orinputReqDate').val()
        // 납기 일자(발주에서 사용)
        var deliveryDate = $('#orinputDlvyDate').val()

        $('.table.item tbody tr').each(function(index) {
            // 현재 행의 인덱스를 사용하여 입력 필드에 값을 설정
            $(this).find('.RegisDate').val(currentDate);
            $(this).find('.AccountCode').val(accountCode);
            $(this).find('.EmpInfoId').val(selectedEmp);
            $(this).find('.OrinputReqDate').val(requestDate);
            $(this).find('.OrinputDlvyDate').val(deliveryDate);
        });

        var formData = new FormData(this);

        // FormData 객체를 반복하여 폼 데이터 확인
        formData.forEach(function(value, key) {
            console.log(key + ': ' + value);
        });

        // AJAX를 사용하여 폼 데이터 제출
        $.ajax({
            type: $(this).attr('method'), // POST 또는 GET
            url: $(this).attr('action'),
            data: $(this).serialize(), // 폼 데이터 직렬화
            success: function(response) {
                // 성공적으로 제출된 경우의 처리 로직
                console.log('Form Submitted Successfully');
            },
            error: function(response) {
                // 오류 처리 로직

                console.log('Error Submitting Form');
            }
        });
    });
});
//$(document).ready(function() {
//    // 폼이 제출될 때마다 실행되도록 변경
//    $('.formEntry').submit(function(e) {
//        // 폼 제출을 막음
//        e.preventDefault();
//
//        // 입력 필드에서 숫자가 아닌 문자 제거
//        $('.itemamt, .itemup, .itemsp, .itemvar, .itemsum').each(function() {
//            var value = $(this).val().replace(/[^0-9]/g, '');
//            $(this).val(value);
//        });
//
//        // 폼 데이터 변경
//        var selectedEmp = $('#orinputname').val();
//        // 거래처 코드의 현재 값을 가져옴
//        var accountCode = $('#accountCode').val();
//        // 견적 일자의 현재 값을 가져옴
//        var currentDate = $('#currentDate').val();
//        // 발주 요청 일자(발주에서 사용)
//        var requestDate = $('#orinputReqDate').val()
//        // 납기 일자(발주에서 사용)
//        var deliveryDate = $('#orinputDlvyDate').val()
//
//        $('.table.item tbody tr').each(function(index) {
//            // 현재 행의 인덱스를 사용하여 입력 필드에 값을 설정
//            $(this).find('.RegisDate').val(currentDate);
//            $(this).find('.AccountCode').val(accountCode);
//            $(this).find('.EmpInfoId').val(selectedEmp);
//            $(this).find('.OrinputReqDate').val(requestDate);
//            $(this).find('.OrinputDlvyDate').val(deliveryDate);
//        });
//
//        var formData = new FormData(this);
//
//        // FormData 객체를 반복하여 폼 데이터 확인
//        formData.forEach(function(value, key) {
//            console.log(key + ': ' + value);
//        });
//
//        // AJAX를 사용하여 폼 데이터 제출
//        $.ajax({
//            type: $(this).attr('method'), // POST 또는 GET
//            url: $(this).attr('action'),
//            data: $(this).serialize(), // 폼 데이터 직렬화
//            success: function(response) {
//                // 성공 시 리다이렉션
//                $('#successModal').modal('show');
//                // 모달이 닫힐 때 리다이렉션
//                $('#successModal').on('hidden.bs.modal', function () {
//                    window.location.href = response.redirectUrl;
//                });
//            },
//            error: function(xhr) {
//                // 오류 처리 로직
//                var response = JSON.parse(xhr.responseText); // 응답 텍스트를 JSON 객체로 변환
//                // 서버로부터 받은 에러 메시지를 알림
//                // 오류 처리 로직
//                var response = JSON.parse(xhr.responseText);
//                // 오류 메시지 모달 표시
//                $('#failModal').modal('show'); // 올바른 셀렉터 사용
//                // 모달이 닫힐 때 리다이렉션
//                $('#failModal').on('hidden.bs.modal', function () {
//                    window.location.href = response.redirectUrl;
//                });
//                console.log('Error Submitting Form');
//            }
//        });
//    });
//});
//$('#successModal').on('hidden.bs.modal', function () {
//    // 페이지를 새로 고침
//    window.location.reload();
//});



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
function deleteAccountFinished() {
    alert('거래처가 삭제되었습니다.');
}

$('.table.item a[data-id]').on('click', function() {
    console.log($(this).data('id')); // 클릭된 요소의 ID를 콘솔에 출력
    var whregistCd = $(this).data('id');
    $.ajax({
        url: '/whregist/list/detail/' + whregistCd,
        type: 'GET',
        success: function(data) {
            console.log(data); // 받은 데이터를 콘솔에 출력하여 확인
            if (data && data.length > 0) {
                $('#updatewhregistCode').val(data[0].whregistEntity.whregistCd);
                $('#updatewhregistName').val(data[0].whregistEntity.whregistNm);
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



// 테이블의 행 클릭 이벤트 핸들러
$('#detailEstimateCd[data-id]').on('click', function() {
    console.log($(this).data('id'));
    var estimateId = $(this).data('id'); // data-id 속성에서 ID 가져오기
    $('#estimatedetail').modal('hide');
    // AJAX 요청
    $.ajax({
        url: '/ss/estimate/list/detail/' + estimateId, // 서버 엔드포인트
        type: 'GET',
        success: function(data) {
            data.forEach(function(value, key) {
                console.log(key + ': ' + value);
            });
            if (data && data.length > 0) {
                // 성공 시 모달 내용 업데이트
                var modaltBody = $('.formEntry .table.item tbody');
                modaltBody.empty();
                $('#estimateCd').val(data[0].estimateCd);
                $('#updateCurrentDate').val(data[0].estimateDt);
                $('#updateaccountCode').val(data[0].accountEntity.accountCd);
                $('#updatename').val(data[0].empInfoEntity.empInfoNm);
                $('#updateaccountName').val(data[0].accountEntity.accountNm);
                // 데이터 항목별로 행 추가
                data.forEach(function(item, index) {
                    var row = $('<tr>'); // 행 생성

                    // 각 셀에 입력 요소와 name 속성 추가
                    row.append('<td><input type="hidden" name="estimateDtos[' + index + '].estimateDt" class="form-control" value="' + item.estimateDt + '">'+
                    '<input type="hidden" name="estimateDtos[' + index + '].accountEntity.accountCd" class="form-control" value="' + item.accountEntity.accountCd + '">'+
                    '<input type="hidden" name="estimateDtos[' + index + '].empInfoEntity.empInfoId" class="form-control" value="' + item.empInfoEntity.empInfoId+ '">'+
                    '<input type="hidden" name="estimateDtos[' + index + '].estimateCd" class="form-control" value="' + item.estimateCd+ '">'+
                    '<input type="text" class="form-control" name="estimateDtos[' + index + '].itemEntity.itemCd" value="' + item.itemEntity.itemCd + '"></td>');
                    row.append('<td><input type="text" class="form-control itemname" value="' + item.itemEntity.itemNm + '"></td>');
                    row.append('<td><input type="text" class="form-control itemstnd" value="' + item.itemEntity.itemStnd + '"></td>');
                    row.append('<td><input type="text" name="estimateDtos[' + index + '].estimateAmt" class="form-control itemamt" value="' + item.estimateAmt + '"></td>');
                    row.append('<td><input type="text" name="estimateDtos[' + index + '].estimateUp" class="form-control itemup" value="' + item.estimateUp + '"></td>');
                    row.append('<td><input type="text" name="estimateDtos[' + index + '].estimateSp" class="form-control itemsp" value="' + item.estimateSp + '"></td>');
                    row.append('<td><input type="text" name="estimateDtos[' + index + '].estimateVat" class="form-control itemvar" value="' + item.estimateVat + '"></td>');
                    row.append('<td><input type="text" name="estimateDtos[' + index + '].estimateTamt" class="form-control itemsum" value="' + item.estimateTamt + '"></td>');
                    row.append('<td><input type="text" name="estimateDtos[' + index + '].estimateEtc" class="form-control" value="' + item.estimateEtc + '"></td>');
                    modaltBody.append(row); // 생성된 행을 테이블에 추가
                });

                $('#detail').modal('show'); // 모달 표시
            } else {
                console.error('데이터가 비어있습니다.');
            }
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});

function formatToKRW(value) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(value);
}

// 테이블의 행 클릭 이벤트 핸들러
$('#detailOrinputCd[data-id]').on('click', function() {
    console.log($(this).data('id'));
    var orinputId = $(this).data('id'); // data-id 속성에서 ID 가져오기
    // AJAX 요청
    $.ajax({
        url: '/pur/orinput/list/detail/' + orinputId, // 서버 엔드포인트
        type: 'GET',
        success: function(data) {
            data.forEach(function(value, key) {
                console.log(key + ': ' + value);
            });
            if (data && data.length > 0) {
                // 성공 시 모달 내용 업데이트
                var modaltBody = $('.formEntry .table.item tbody');
                modaltBody.empty();
                $('#updateCurrentDate').val(data[0].orinputOrDt);
                $('#updateaccountCode').val(data[0].accountEntity.accountCd);
                $('#updatename').val(data[0].empInfoEntity.empInfoNm);
                $('#updateaccountName').val(data[0].accountEntity.accountNm);
                $('#orinputReqDate').val(data[0].orinputReqDt);
                $('#orinputDlvyDate').val(data[0].orinputDlvyDt);
                // 데이터 항목별로 행 추가
                data.forEach(function(item, index) {
                    var row = $('<tr>'); // 행 생성

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
    // 모달의 'data-show-modal' 값을 읽어와 boolean으로 변환
    var showModal = $('#successModal').data('show-modal') === true;
    var failModal = $('#failModal').data('show-modal') === false;
    // 값이 true일 경우 모달 표시
    if (showModal) {
        $('#successModal').modal('show');
    }
    if(failModal){
        $('#failModal').modal('show');
    }
});


$('#orinputcddelete').click(function() {
    deleteSelectedOrinput();
});

function deleteSelectedOrinput() {
    // 선택한 발주 정보의 ID 가져오기
    var selectedOrinputId = $('#dataTable input[name="selectedOrinPut"]:checked').map(function(){
        return $(this).val();
    }).get();

    // 선택한 ID를 hidden input에 설정
    $('#selectedOrinputInput').val(selectedOrinputId);

    // 삭제 폼 submit
    $('#deleteOrinputForm').submit();
}

function refreshPage() {
    window.location.reload(); // 페이지 새로고침
}



