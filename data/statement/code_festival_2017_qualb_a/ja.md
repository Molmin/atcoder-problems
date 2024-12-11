配点 : $100$ 点

## 問題文

りんごさんは、とある祭りに参加しようとしています。

その祭りの名称が `FESTIVAL` で終わる文字列 $S$ として入力に与えられるので、りんごさんが何の祭りに参加しようしているのかを出力して下さい。

ただし、$s$ の祭りの名称は $s$ の末尾に `FESTIVAL` を $1$ つだけ追加した文字列であるとします。
例えば `CODEFESTIVAL` は `CODE` の祭りです。

## 制約

- $9 \leq |S| \leq 50$
- $S$ は大文字アルファベットのみからなる
- $S$ は `FESTIVAL` で終わる

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

りんごさんが何の祭りに参加しようしているのかを出力せよ。

```input1
CODEFESTIVAL
```

```output1
CODE
```

問題文中の例の通りです。

```input2
CODEFESTIVALFESTIVAL
```

```output2
CODEFESTIVAL
```

`CODEFESTIVAL` の末尾に `FESTIVAL` を追加した文字列であるので、これは `CODEFESTIVAL` の祭りとなります。

```input3
YAKINIKUFESTIVAL
```

```output3
YAKINIKU
```