<?php

$videos = ['ocYubxOHCR0', 'BddONSfhztA', 'Pac2sV5JqJE'];
$hides = ['hide', 'hide', 'hide'];


$now = strtotime('now');
$dates = array(strtotime('2022-01-26'), strtotime('2022-01-27'), strtotime('2022-01-28'), strtotime('2022-01-31'));

$sales1 = array('2 000р.','1 000р.');
$sales2 = array('2 000р.','1 000р.');
$sales3 = array('2 000р.','1 000р.');

$todays1 = array('14 900р.','15 900р.');
$todays2 = array('20 900р.','21 900р.');
$todays3 = array('26 900р.','27 900р.');

$links1 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1323&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1324&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1325&clean=true&lg=ru');
$links2 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1327&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1328&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1329&clean=true&lg=ru');
$links3 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1331&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1332&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1333&clean=true&lg=ru');

$prepLinks = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1335&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1336&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1337&clean=true&lg=ru');

if ($now < $dates[0]){
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];
    $sale3 = $sales3[0];

    $today1 = $todays1[0];
    $today2 = $todays2[0];
    $today3 = $todays3[0];

    $link1 = $links1[0];
    $link2 = $links2[0];
    $link3 = $links3[0];

    $prepLink = $prepLinks[0];
}
else if (($now >= $dates[0]) && $now < $dates[1]){
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];
    $sale3 = $sales3[1];

    $today1 = $todays1[1];
    $today2 = $todays2[1];
    $today3 = $todays3[1];

    $link1 = $links1[1];
    $link2 = $links2[1];
    $link3 = $links3[1];

    $prepLink = $prepLinks[1];
}
else {

    $link1 = $links1[2];
    $link2 = $links2[2];
    $link3 = $links3[2];

    $prepLink = $prepLinks[2];
}

?>