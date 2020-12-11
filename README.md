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

※ローカルで使うもののためログインなど認証等は実装しない

## 実装の流れ

* コンポーネントごとに静的コーディング
* 画像URLとラベルを入力 → DBに保存 → 一覧で表示
* 画像URLについては、下記リポジトリで作成したアップロードツールを用いる
[https://github.com/p-t-a-p-1/nuxt-image-uploader]https://github.com/p-t-a-p-1/nuxt-image-uploader
* パスワードは画像ファイル名を入力させる（githubのリポジトリ削除時と同じ流れ）
