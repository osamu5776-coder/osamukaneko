<!DOCTYPE html>
<html lang="ja">

     <head>
          <meta charset="UTF-8">
          <title>PHP基礎編</title>
     </head>

     <body>
           <p>
              <?php
              // ソート関数
              function sort_2way(array $array, bool $order): void {

              if ($order) {
              echo "昇順にソートします。<br>";
              sort($array);
              } else {
              echo "降順にソートします。<br>";
              rsort($array);
              }

              // foreachで出力
              foreach ($array as $num) {
              echo $num . "<br>";
              }
             }

              // ソートする配列
              $nums = [15, 4, 18, 23, 10];

              // 関数呼び出し（昇順）
              sort_2way($nums, true);

              // 関数呼び出し（降順）
              sort_2way($nums, false);
              ?>
          </p>
    </body>

</html>