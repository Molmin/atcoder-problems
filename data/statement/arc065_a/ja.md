配点 : $300$ 点

## 問題文

英小文字からなる文字列 $S$ が与えられます。
$T$が空文字列である状態から始め、以下の操作を好きな回数繰り返すことで $S = T$ とすることができるか判定してください。

- $T$ の末尾に `dream` `dreamer` `erase` `eraser` のいずれかを追加する。

## 制約

- $1 \leq |S| \leq 10^5$
- $S$ は英小文字からなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

$S = T$ とすることができる場合 `YES` を、そうでない場合 `NO` を出力せよ。

```input1
erasedream
```

```output1
YES
```

`erase` `dream` の順で $T$ の末尾に追加することで $S = T$ とすることができます。

```input2
dreameraser
```

```output2
YES
```

`dream` `eraser` の順で $T$ の末尾に追加することで $S = T$ とすることができます。

```input3
dreamerer
```

```output3
NO
```