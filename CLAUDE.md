# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

**quiz-app** — 一般常識クイズアプリ。HTML/CSS/JavaScript のみで構成されたフロントエンド単体アプリ。
全5問・4択形式。回答ごとに正誤フィードバックと解説を表示し、最後にスコアを表示する。

## 技術スタック

- HTML5 / CSS3 / Vanilla JavaScript
- ビルドツール・パッケージマネージャーなし（依存ライブラリゼロ）

## 実行方法

`index.html` をブラウザで直接開けば動作する。ローカルサーバーが必要な場合：

```
npx serve .
# または
python -m http.server 8080
```

## ファイル構成と役割

| ファイル | 役割 |
|---|---|
| `index.html` | 画面構造（スタート画面・クイズ画面・結果画面の3つを1ファイルに定義） |
| `style.css` | スタイル。`.hidden` クラスで画面の表示切り替えを制御 |
| `script.js` | 問題データ・クイズロジック・DOM操作をすべて担う |

## アーキテクチャ

### 画面遷移

```
スタート画面 → クイズ画面（問1〜5） → 結果画面
```

3つの画面要素は常にDOMに存在し、`.hidden` クラスの付け外しで切り替える。

### script.js の構造

- `questions` 配列：問題文・選択肢・正解インデックス・解説を持つオブジェクトの配列
- `currentIndex` / `score`：状態変数（グローバル）
- `showQuestion()` → `selectAnswer()` → `nextQuestion()` の順で1問を処理
- 選択後は全ボタンを `disabled` にし、正解ボタンに `.correct` / 誤答ボタンに `.incorrect` / 正解ボタンに `.reveal` を付与

### 問題の追加・編集

`script.js` の `questions` 配列にオブジェクトを追加するだけでよい。ロジックは問題数（`TOTAL`）を自動的に参照するため変更不要。

```js
{
  text: '問題文',
  choices: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
  correct: 0,        // choices のインデックス（0始まり）
  explanation: '解説文'
}
```
