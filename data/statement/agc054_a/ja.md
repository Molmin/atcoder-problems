配点 : $300$ 点

## 問題文

英小文字からなる長さ $N$ の文字列 $S$ が与えられます．

あなたは，$S$ に対して以下の操作を好きな回数行えます．

- 先頭の文字と最後の文字が異なる連続した（非空な）部分列を選び，これを削除する．

$S$ を空文字列にすることが可能か判定し，可能な場合は必要な最小の操作回数を求めてください．

## 制約

- $2 \leq N \leq 10^5$
- $S$ は英小文字からなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $S$

## 出力

$S$ を空文字列にすることが可能な場合，必要な最小の操作回数を出力せよ．
不可能な場合，$-1$ を出力せよ．

```input1
4
abba
```

```output1
2
```

`abba` →（`ab`を選んで削除）→ `ba` →（`ba`を選んで削除）→ 空文字列　と操作すればよいです．

```input2
3
aba
```

```output2
-1
```