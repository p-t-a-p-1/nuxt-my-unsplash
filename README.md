# 概要

Nuxt × MySQLで画像を一覧表示

## 機能要件

- masonryレイアウトで写真の一覧が見れる
- 写真を追加できる。写真一覧は日付が新しい順番
- 写真についてあるラベルを元に検索ができる
- 写真にhoverするとラベルと削除ボタンが表示される
- 削除ボタンを押すと該当写真が削除される
- 画像を削除するときにパスワードを入れると削除されるようにする
- アイコンは下記を参照
[https://google.github.io/material-design-icons/](https://google.github.io/material-design-icons/)

## photoテーブル

|    列名    |    カラム名    |    型    |    制約    |    デフォルト    |    その他    |
|:------------------:|:------------------:|:------------------:|:------------------:|:-----------------:|:-----------------:|
|    写真ID    |    id    |    INT   |    PRIMARY KEY, NOT NULL    |    NONE    |    AUTO_INCREMENT    |
|    ラベル    |    label    |    VARCHAR(20)    |    NOT NULL   |    NONE    |    -    |
|    画像URL    |    url    |    VARCHAR(255)    |    NOT NULL    |    NONE    |    -    |
|    登録日時    |    created_at    |    datetime    |    NOT NULL    |    CURRENT_TIMESTAMP    |    -    |
