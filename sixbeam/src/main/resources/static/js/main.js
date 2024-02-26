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
        //초기 로딩시 주소가 home일떄 활성탭을 home으로 함
        if (window.location.pathname === '/sixbeam/home') {
            activeTabId = 'home'; // 활성 탭 ID를 'home'으로 설정
        }
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
        var requestDate = $('#orinputReqDate').val();
        // 납기 일자(발주에서 사용)
        var deliveryDate = $('#orinputDlvyDate').val();

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
                // 서버로부터 받은 에러 메시지를 알림
                // 오류 처리 로직
                var response = JSON.parse(xhr.responseText);
                $('#failModal .modal-body').text(response.message);  //controller에서 받은 message 출력
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
$('#successModal').on('hidden.bs.modal', function () {
    // 페이지를 새로 고침
    window.location.reload();
});


//재고_As등록--------------------------------------------------------------------------------시작
$(document).ready(function() {
    // 폼이 제출될 때마다 실행되도록 변경
    $('.AsformEntry').submit(function(e) {
        // 폼 제출을 막음
        e.preventDefault();

        var asDt = $('#currentDate').val();
        var empInfoId = $('#empInfoId').val();
        var accountCd = $('#accountCode').val();
        var ascmptDt = $('#ascmptDt').val();
        var asSt = $('#asSt').val();
        var asTi = $('#asTi').val();
        var whregistNm = $('#whregistCode').val();
        var asMo = $('#asMo').val();

        $('.table.Asitem tbody tr').each(function(index) {
            // 현재 행의 인덱스를 사용하여 입력 필드에 값을 설정
            $(this).find('.RegisDate').val(asDt);
            $(this).find('.EmpInfoId').val(empInfoId);
            $(this).find('.AccountCode').val(accountCd);
            $(this).find('.WhregistCode').val(whregistNm);
            $(this).find('.AsSt').val(asSt);
            $(this).find('.AscmptDt').val(ascmptDt);
            $(this).find('.AsTi').val(asTi);
            $(this).find('.AsMo').val(asMo);
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
                // 서버로부터 받은 에러 메시지를 알림
                // 오류 처리 로직
                var response = JSON.parse(xhr.responseText);
                $('#failModal .modal-body').text(response.message);  //controller에서 받은 message 출력
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
//재고_As등록--------------------------------------------------------------------------------끝
//재고_AS모달등록-------------------------------------------------------------------------------------------시작
$('.table.Asitem').on('change input', '.selectbox, .itemamt', function() {
    var $row = $(this).closest('tr');
    var itemamt = parseFloat($row.find('.itemamt').val());

    if ($(this).hasClass('selectbox')) { // .selectbox에서의 변경인 경우에만 처리
        var valueitemname = $(this).find(':selected').attr("data-itemNm");
        var valueitmestnd = $(this).find(':selected').attr("data-itemStnd");

        $(this).closest('tr').find('.itemname').val(valueitemname);
        $(this).closest('tr').find('.itemstnd').val(valueitmestnd);
    }
});
//재고_AS모달등록-------------------------------------------------------------------------------------------끝
//재고_창고수정-------------------------------------------------------------------------------------------시작
$('#detailwhregistCd[data-id]').on('click', function() {
    // 클릭된 요소의 ID를 콘솔에 출력
    console.log($(this).data('id'));

    // 클릭된 요소의 ID를 변수에 저장
    var whregistId = $(this).data('id');

    $.ajax({
        url: '/st/whregist/list/detail/' + whregistId,
        type: 'GET',
        success: function(data) {
            console.log(data); // 받은 데이터를 콘솔에 출력하여 확인
            if (data && data.length > 0) {
                if (data[0].hasOwnProperty('whregistCd') && data[0].hasOwnProperty('whregistNm')) {
                    $('#updatewhregistCode').val(data[0].whregistCd);
                    $('#updatewhregistName').val(data[0].whregistNm);

                    data.forEach(function(item, index) {
                        var row = $('<tr>'); // 행 생성
                        row.append('<td><input type="hidden" name="whregistDtos[' + index + '].whregistCd" class="form-control" value="' + item.whregistCd+ '">'+
                            '<input type="hidden" name="whregistDtos[' + index + '].whregistNm" class="form-control" value="' + item.whregistNm+ '"></td>');
                        $('#detailTableBody').append(row); // 수정: 생성된 행을 테이블에 추가
                    });

                    $('#detail').modal('show');
                } else {
                    console.error('데이터 구조가 올바르지 않습니다.');
                }
            } else {
                console.error('데이터가 비어있습니다.');
            }
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});
//재고_창고등록--------------------------------------------------------------------------------------------끝
//재고_출하등록--------------------------------------------------------------------------------시작
$(document).ready(function() {
    // 폼이 제출될 때마다 실행되도록 변경
    $('.ReleaseformEntry').submit(function(e) {
        // 폼 제출을 막음
        e.preventDefault();

        var releaseDt = $('#currentDate').val();
        var empInfoId = $('#empInfoId').val();
        var accountCd = $('#accountCode').val();
        var releaseRv = $('#releaseRv').val();
        var releasePhone = $('#releasePhone').val();
        var releaseZc = $('#releaseZc').val();
        var whregistNm = $('#whregistCode').val();
        var releaseAddr = $('#releaseAddr').val();

        $('.table.item tbody tr').each(function(index) {
            // 현재 행의 인덱스를 사용하여 입력 필드에 값을 설정
            $(this).find('.RegisDate').val(releaseDt);
            $(this).find('.EmpInfoId').val(empInfoId);
            $(this).find('.AccountCode').val(accountCd);
            $(this).find('.WhregistCode').val(whregistNm);
            $(this).find('.ReleaseRv').val(releaseRv);
            $(this).find('.ReleasePhone').val(releasePhone);
            $(this).find('.ReleaseZc').val(releaseZc);
            $(this).find('.ReleaseAddr').val(releaseAddr);
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
//재고_출하등록--------------------------------------------------------------------------------끝
//재고_AS수정---------------------------------------------------------------------------------시작
$('#detailAsCd[data-id]').on('click', function() {
    console.log($(this).data('id'));
    var asCd = $(this).data('id'); // data-id 속성에서 ID 가져오기
    $('#asdetail').modal('hide');
    // AJAX 요청
    $.ajax({
        url: '/st/as/list/detail/' + asCd, // 서버 엔드포인트
        type: 'GET',
        success: function(data) {
            data.forEach(function(value, key) {
                console.log(key + ': ' + value);
            });
            if (data && data.length > 0) {
                // 성공 시 모달 내용 업데이트
                var modaltBody = $('.AsformEntry .table.Asitem tbody');
                modaltBody.empty();
                $('#asCd').val(data[0].asCd);
                $('#updateCurrentDate').val(data[0].asDt);
                $('#updateaccountCode').val(data[0].accountEntity.accountCd);
                $('#updatename').val(data[0].empInfoEntity.empInfoNm);
                $('#updateaccountName').val(data[0].accountEntity.accountNm);
                $('#updateascmptDt').val(data[0].ascmptDt);
                $('#updateasSt').val(data[0].asSt);
                $('#updateasTi').val(data[0].asTi);
                $('#updatewhregistName').val(data[0].whregistEntity.whregistNm);
                $('#updateasMo').val(data[0].asMo);
                // 데이터 항목별로 행 추가
                data.forEach(function(Asitem, index) {
                    var row = $('<tr>'); // 행 생성
                    // 각 셀에 입력 요소와 name 속성 추가
                    row.append('<td><input type="hidden" name="asCd" class="form-control" value="' + Asitem.asCd + '">'+
                    '<input type="hidden" name="empInfoEntity" class="form-control" value="' + Asitem.empInfoEntity.empInfoId + '">'+
                    '<input type="hidden" name="whregistEntity" class="form-control" value="' + Asitem.whregistEntity.whregistCd+ '">'+
                    '<input type="text" class="form-control" name="itemEntity" value="' + Asitem.itemEntity.itemCd + '"></td>');
                    row.append('<td><input type="text" class="form-control itemname" value="' + Asitem.itemEntity.itemNm + '"></td>');
                    row.append('<td><input type="text" class="form-control itemstnd" value="' + Asitem.itemEntity.itemStnd + '"></td>');
                    row.append('<td><input type="text" name="asAmt" class="form-control itemamt" value="' + Asitem.asAmt + '"></td>');
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
//재고_AS수정---------------------------------------------------------------------------------끝





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




function refreshPage() {
    window.location.reload(); // 페이지 새로고침
}


// pd 사용 js
function setItemInfo(itemCd, itemNm , itemStnd, itemUp)
{
    $('#editItem').modal('show');
    $('#editItemCd').val(itemCd);
    $('#editItemNm').val(itemNm);
    $('#editItemStnd').val(itemStnd);
    $('#editItemUp').val(itemUp);
}
function registerItemFinished() {
    alert('품목이 등록되었습니다.')
}
function editItemFinished() {
    alert('품목 정보가 수정되었습니다.');
}
function deleteItemFinished() {
    alert('품목이 삭제되었습니다.');
}

function forDelete() {
    // 체크박스의 값(계정 ID)을 저장할 배열
    var selectedIds = [];

    // 모든 'selectedInfo' 클래스를 가진 체크박스를 찾고 선택된 항목의 값만 배열에 추가
    document.querySelectorAll('.selectedInfo:checked').forEach(function(checkbox) {
        selectedIds.push(checkbox.value);
    });

    // 선택된 체크박스가 없으면 에러 메시지를 표시하고 함수를 종료
    if (selectedIds.length === 0) {
        alert('삭제할 항목을 선택해주세요.');

        // 빈 폼을 전달하고 모달 닫기
        document.getElementById('deleteForm').submit();
    } else {
        // 배열을 쉼표로 구분된 문자열로 변환
        var itemIdsToDelete = selectedIds.join(',');

        // 숨겨진 입력 필드에 값을 설정
        document.getElementById('deleteItemInfo').value = itemIdsToDelete;

        alert('품목이 삭제되었습니다.');
        // 폼을 제출하여 서버에 삭제 요청을 보냅니다
        document.getElementById('deleteForm').submit();
    }
}

$(document).ready(function() {
    // 폼이 제출될 때마다 실행되도록 변경
    $('.itemformEntry').submit(function(e) {
        // 기본폼 제출을 막음
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
        var requestDate = $('#orinputReqDate').val();
        // 납기 일자(발주에서 사용)
        var deliveryDate = $('#orinputDlvyDate').val();

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
                // 서버로부터 받은 에러 메시지를 알림
                // 오류 처리 로직
                var response = JSON.parse(xhr.responseText);
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

$(document).ready(function() {

    // 품목 코드 선택하면 품목명이 나올 수 있도록 하는 제이쿼리
    $("#itemCode").on('input', function() {
        // 입력된 값 가져오기
        var itemCd = $(this).val();
        // 모든 품목 코드 선택 옵션을 반복하면서 입력된 값과 일치하는지 확인.
        $("#itemCodeSelectBox option").each(function () {
            // 현재 옵션의 값이 입력된 값과 일치하는지 확인
            if ($(this).val() === itemCd) {
                // 일치하는 경우 해당 옵션의 텍스트 값을 가져와서 품목명 입력란에 설정
                var itemNm = $(this).text();
                $("#itemName").val(itemNm);
                return false; // 반복문 종료
            }
        });
    });
});

// pd 끝 라인

$(document).ready(function() {
    var date = new Date();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();

    function updateCalendar() {
        var firstDay = new Date(currentYear, currentMonth, 1).getDay();
        var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        var months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

        // 현재 연도와 월을 표시
        $('#currentYearMonth').text(`${currentYear}년 ${months[currentMonth]}`);

        // 달력 초기화 및 날짜 채우기
        var calendarHtml = '<table class="table table-bordered"><thead><tr>';
        calendarHtml += '<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>';
        calendarHtml += '</tr></thead><tbody><tr>';

        for (let i = 0; i < firstDay; i++) {
            calendarHtml += '<td></td>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if ((day + firstDay - 1) % 7 === 0) {
                calendarHtml += '</tr><tr>';
            }
            calendarHtml += `<td>${day}</td>`;
        }

        calendarHtml += '</tr></tbody></table>';

        $('#calendar').html(calendarHtml);
    }

    updateCalendar();

    $('#prevMonth').click(function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    $('#nextMonth').click(function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });
});