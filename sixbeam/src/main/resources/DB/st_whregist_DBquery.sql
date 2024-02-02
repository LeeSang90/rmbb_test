-- 창고등록 DB --
insert into sixbeam_erp.st_whregist_tb (whregist_cd, whregist_nm) values("WHR1001","본사창고");
insert into sixbeam_erp.st_whregist_tb (whregist_cd, whregist_nm) values("WHR1002","생산창고");
insert into sixbeam_erp.st_whregist_tb (whregist_cd, whregist_nm) values("WHR1003","자재창고");
-- 창고이동 DB --
insert into sixbeam_erp.st_whmove_tb (whmove_amt,whmove_dt,empinfo_id,item_cd,whmove_cd,whmove_gb,whregist_cd) values
(1	,"2024-01-02"	,"20241009"	,"F1001"	,"WHM2024-10001"	,"출고"	,"WHR1002"),
(1	,"2024-01-04"	,"20241008"	,"F1001"	,"WHM2024-10002"	,"입고"	,"WHR1003"),
(2	,"2024-01-03"	,"20241009"	,"F1002"	,"WHM2024-10003"	,"출고"	,"WHR1002"),
(2	,"2024-01-05"	,"20241008"	,"F1002"	,"WHM2024-10004"	,"입고"	,"WHR1003"),
(5	,"2024-01-03"	,"20241009"	,"F1001"	,"WHM2024-10005"	,"출고"	,"WHR1002"),
(5	,"2024-01-05"	,"20241008"	,"F1001"	,"WHM2024-10006"	,"입고"	,"WHR1003"),
(4	,"2024-01-04"	,"20241007"	,"F1004"	,"WHM2024-10007"	,"출고"	,"WHR1002"),
(4	,"2024-01-08"	,"20241008"	,"F1004"	,"WHM2024-10008"	,"입고"	,"WHR1003"),
(10	,"2024-01-05"	,"20241009"	,"F1005"	,"WHM2024-10009"	,"출고"	,"WHR1002"),
(10	,"2024-01-08"	,"20241008"	,"F1005"	,"WHM2024-10010"	,"입고"	,"WHR1003"),
(20	,"2024-01-09"	,"20241007"	,"R1001"	,"WHM2024-10011"	,"출고"	,"WHR1002"),
(20	,"2024-01-11"	,"20241008"	,"R1001"	,"WHM2024-10012"	,"입고"	,"WHR1003"),
(15	,"2024-01-10"	,"20241007"	,"R1002"	,"WHM2024-10013"	,"출고"	,"WHR1002"),
(15	,"2024-01-12"	,"20241008"	,"R1002"	,"WHM2024-10014"	,"입고"	,"WHR1003"),
(13	,"2024-01-11"	,"20241009"	,"R1003"	,"WHM2024-10015"	,"출고"	,"WHR1002"),
(13	,"2024-01-15"	,"20241008"	,"R1003"	,"WHM2024-10016"	,"입고"	,"WHR1003"),
(7	,"2024-01-15"	,"20241007"	,"R1004"	,"WHM2024-10017"	,"출고"	,"WHR1002"),
(7	,"2024-01-17"	,"20241008"	,"R1004"	,"WHM2024-10018"	,"입고"	,"WHR1003"),
(8	,"2024-01-18"	,"20241009"	,"R1005"	,"WHM2024-10019"	,"출고"	,"WHR1002"),
(8	,"2024-01-19"	,"20241008"	,"R1005"	,"WHM2024-10020"	,"입고"	,"WHR1003"),
(8	,"2024-01-22"	,"20241007"	,"R1006"	,"WHM2024-10021"	,"출고"	,"WHR1002"),
(8	,"2024-01-24"	,"20241008"	,"R1006"	,"WHM2024-10022"	,"입고"	,"WHR1003"),
(3	,"2024-01-23"	,"20241009"	,"R1007"	,"WHM2024-10023"	,"출고"	,"WHR1002"),
(3	,"2024-01-25"	,"20241008"	,"R1007"	,"WHM2024-10024"	,"입고"	,"WHR1003"),
(2	,"2024-01-24"	,"20241007"	,"R1008"	,"WHM2024-10025"	,"출고"	,"WHR1002"),
(2	,"2024-01-26"	,"20241008"	,"R1008"	,"WHM2024-10026"	,"입고"	,"WHR1003"),
(3	,"2024-01-29"	,"20241008"	,"F1001"	,"WHM2024-10027"	,"출고"	,"WHR1003"),
(3	,"2024-01-31"	,"20241004"	,"F1001"	,"WHM2024-10028"	,"입고"	,"WHR1001"),
(7	,"2024-02-01"	,"20241008"	,"F1003"	,"WHM2024-10029"	,"출고"	,"WHR1003"),
(7	,"2024-02-02"	,"20241004"	,"F1003"	,"WHM2024-10030"	,"입고"	,"WHR1001"),
(5	,"2024-01-02"	,"20241001"	,"R1001"	,"WHM2024-10031"	,"입고"	,"WHR1003"),
(20	,"2024-01-09"	,"20241006"	,"R1001"	,"WHM2024-10032"	,"입고"	,"WHR1003"),
(13	,"2024-01-04"	,"20241003"	,"R1002"	,"WHM2024-10033"	,"입고"	,"WHR1003"),
(17	,"2024-01-09"	,"20241006"	,"R1002"	,"WHM2024-10034"	,"입고"	,"WHR1003"),
(10	,"2024-01-02"	,"20241001"	,"R1003"	,"WHM2024-10035"	,"입고"	,"WHR1003"),
(36	,"2024-01-09"	,"20241006"	,"R1003"	,"WHM2024-10036"	,"입고"	,"WHR1003"),
(50	,"2024-01-08"	,"20241005"	,"R1004"	,"WHM2024-10037"	,"입고"	,"WHR1003"),
(45	,"2024-01-09"	,"20241006"	,"R1004"	,"WHM2024-10038"	,"입고"	,"WHR1003"),
(20	,"2024-01-04"	,"20241003"	,"R1005"	,"WHM2024-10039"	,"입고"	,"WHR1003"),
(15	,"2024-01-08"	,"20241005"	,"R1005"	,"WHM2024-10040"	,"입고"	,"WHR1003"),
(36	,"2024-01-09"	,"20241006"	,"R1005"	,"WHM2024-10041"	,"입고"	,"WHR1003"),
(16	,"2024-01-05"	,"20241004"	,"R1006"	,"WHM2024-10042"	,"입고"	,"WHR1003"),
(25	,"2024-01-08"	,"20241005"	,"R1006"	,"WHM2024-10043"	,"입고"	,"WHR1003"),
(31	,"2024-01-09"	,"20241006"	,"R1006"	,"WHM2024-10044"	,"입고"	,"WHR1003"),
(17	,"2024-01-05"	,"20241004"	,"R1007"	,"WHM2024-10045"	,"입고"	,"WHR1003"),
(23	,"2024-01-09"	,"20241006"	,"R1007"	,"WHM2024-10046"	,"입고"	,"WHR1003"),
(13	,"2024-01-05"	,"20241004"	,"R1008"	,"WHM2024-10047"	,"입고"	,"WHR1003"),
(18	,"2024-01-09"	,"20241006"	,"R1008"	,"WHM2024-10048"	,"입고"	,"WHR1003"),
(20	,"2024-01-09"	,"20241006"	,"R1009"	,"WHM2024-10049"	,"입고"	,"WHR1003"),
(20	,"2024-01-09"	,"20241006"	,"R1010"	,"WHM2024-10050"	,"입고"	,"WHR1003"),
(7	,"2024-01-03"	,"20241002"	,"R1011"	,"WHM2024-10051"	,"입고"	,"WHR1003"),
(9	,"2024-01-03"	,"20241002"	,"R1012"	,"WHM2024-10052"	,"입고"	,"WHR1003"),
(15	,"2024-01-03"	,"20241002"	,"R1013"	,"WHM2024-10053"	,"입고"	,"WHR1003"),
(25	,"2024-01-08"	,"20241005"	,"R1014"	,"WHM2024-10054"	,"입고"	,"WHR1003"),
(30	,"2024-01-08"	,"20241005"	,"R1015"	,"WHM2024-10055"	,"입고"	,"WHR1003"),
(25	,"2024-01-08"	,"20241005"	,"R1016"	,"WHM2024-10056"	,"입고"	,"WHR1003"),
(35	,"2024-01-08"	,"20241005"	,"R1017"	,"WHM2024-10057"	,"입고"	,"WHR1003"),
(30	,"2024-01-08"	,"20241005"	,"R1018"	,"WHM2024-10058"	,"입고"	,"WHR1003"),
(37	,"2024-01-08"	,"20241005"	,"R1019"	,"WHM2024-10059"	,"입고"	,"WHR1003"),
(40	,"2024-01-08"	,"20241005"	,"R1020"	,"WHM2024-10060"	,"입고"	,"WHR1003"),
(5	,"2024-01-31"	,"20241001"	,"F1001"	,"WHM2024-10061"	,"출고"	,"WHR1001"),
(8	,"2024-02-01"	,"20241005"	,"F1002"	,"WHM2024-10062"	,"출고"	,"WHR1001"),
(3	,"2024-02-15"	,"20241007"	,"F1003"	,"WHM2024-10063"	,"출고"	,"WHR1001"),
(10	,"2024-03-02"	,"20241001"	,"F1004"	,"WHM2024-10064"	,"출고"	,"WHR1001"),
(7	,"2024-03-20"	,"20241005"	,"F1005"	,"WHM2024-10065"	,"출고"	,"WHR1001"),
(6	,"2024-08-12"	,"20241007"	,"R1001"	,"WHM2024-10066"	,"출고"	,"WHR1001"),
(9	,"2024-08-25"	,"20241001"	,"R1002"	,"WHM2024-10067"	,"출고"	,"WHR1001"),
(4	,"2024-09-03"	,"20241005"	,"R1003"	,"WHM2024-10068"	,"출고"	,"WHR1001"),
(12	,"2024-09-18"	,"20241007"	,"R1004"	,"WHM2024-10069"	,"출고"	,"WHR1001"),
(8	,"2024-09-30"	,"20241001"	,"R1005"	,"WHM2024-10070"	,"출고"	,"WHR1001"),
(10	,"2024-09-30"	,"20241005"	,"R1006"	,"WHM2024-10071"	,"출고"	,"WHR1001"),
(15	,"2024-09-30"	,"20241007"	,"R1007"	,"WHM2024-10072"	,"출고"	,"WHR1001"),
(20	,"2024-09-30"	,"20241001"	,"R1008"	,"WHM2024-10073"	,"출고"	,"WHR1001"),
(12	,"2024-09-30"	,"20241005"	,"R1009"	,"WHM2024-10074"	,"출고"	,"WHR1001"),
(18	,"2024-09-30"	,"20241007"	,"R1010"	,"WHM2024-10075"	,"출고"	,"WHR1001"),
(10	,"2024-09-30"	,"20241001"	,"R1011"	,"WHM2024-10076"	,"출고"	,"WHR1001"),
(15	,"2024-09-30"	,"20241005"	,"R1012"	,"WHM2024-10077"	,"출고"	,"WHR1001"),
(8	,"2024-09-30"	,"20241007"	,"R1013"	,"WHM2024-10078"	,"출고"	,"WHR1001"),
(25	,"2024-09-30"	,"20241001"	,"R1014"	,"WHM2024-10079"	,"출고"	,"WHR1001"),
(14	,"2024-09-30"	,"20241005"	,"R1014"	,"WHM2024-10080"	,"출고"	,"WHR1001"),
(20	,"2024-09-30"	,"20241007"	,"R1015"	,"WHM2024-10081"	,"출고"	,"WHR1001"),
(10	,"2024-09-30"	,"20241001"	,"R1016"	,"WHM2024-10082"	,"출고"	,"WHR1001"),
(12	,"2024-09-30"	,"20241005"	,"R1017"	,"WHM2024-10083"	,"출고"	,"WHR1001"),
(19	,"2024-09-30"	,"20241007"	,"R1018"	,"WHM2024-10084"	,"출고"	,"WHR1001"),
(14	,"2024-09-30"	,"20241001"	,"R1019"	,"WHM2024-10085"	,"출고"	,"WHR1001"),
(16	,"2024-09-30"	,"20241005"	,"R1020"	,"WHM2024-10086"	,"출고"	,"WHR1001"),
(10	,"2024-09-30"	,"20241007"	,"R1020"	,"WHM2024-10087"	,"출고"	,"WHR1001"),
(22	,"2024-09-30"	,"20241001"	,"R1020"	,"WHM2024-10088"	,"출고"	,"WHR1001"),
(16	,"2024-09-30"	,"20241005"	,"R1020"	,"WHM2024-10089"	,"출고"	,"WHR1001"),
(20	,"2024-09-30"	,"20241007"	,"R1020"	,"WHM2024-10090"	,"출고"	,"WHR1001");