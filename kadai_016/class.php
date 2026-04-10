<!DOCTYPE html>
<html lang="ja">

      <head>
           <meta charset="UTF-8">
           <title>PHP基礎編</title>
     </head>

     <body>
           <p>
              <?php
              // Foodクラス
              class Food {
                    private $name;
                    private $price;

              public function __construct(string $name, int $price) {
                    $this->name = $name;
                    $this->price = $price;
              }

              // メソッド（Food用）
              public function set_price(int $price) {
                    $this->price = $price;
              }

              public function show_price() {
                    echo $this->price;
              }
             }

              // Animalクラス
              class Animal {
                    private $name;
                    private $height;
                    private $weight;

              public function __construct(string $name, int $height, int $weight) {
                    $this->name = $name;
                    $this->height = $height;
                    $this->weight = $weight;
             }

             // メソッド（Animal用）
             public function set_height(int $height) {
                    $this->height = $height;
             }

             public function show_height() {
                    echo $this->height;
              }
             }

             // インスタンス化
             $food = new Food('potato', 250);
             $animal = new Animal('dog', 60, 5000);

             print_r($food);
             echo '<br>';

             print_r($animal);
             echo '<br>';

             // 値を個別表示
             $food->show_price();
             echo '<br>';
             $animal->show_height();
             ?>
          </p>
       </body>
</html>
