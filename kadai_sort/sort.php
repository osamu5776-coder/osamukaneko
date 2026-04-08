<!DOCTYPE html>
<html lang="ja">

     <head>
          <meta charset="UTF-8">
          <title>PHP基礎編</title>
     </head>

     <body>
           <p>
               <?php
               // ソートする配列を宣言
               $nums = [15, 4, 18, 23, 10];
              
               // ソート関数
               function sort_2way(array &$array, bool $order): void {
               if ($order === true) {
               // 昇順
               sort($array);
               } else {
               // 降順
               rsort($array);
               }
              }

              // 昇順ソート
              echo "昇順にソートします。<br>";
              sort_2way($nums, true);

              // foreachで出力
              foreach ($nums as $num) {
              echo $num . "<br>";
              }

              // 降順ソート
              echo "降順にソートします。<br>";
              sort_2way($nums, false);

              // foreachで出力
              foreach ($nums as $num) {
              echo $num . "<br>";
              }
              ?>
          </p>
    </body>

</html>