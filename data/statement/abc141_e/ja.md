配点 : $500$ 点

## 問題文

長さ $N$ の文字列 $S$ が与えられます。

非空文字列であって、$S$ の連続する部分文字列として重ならずに $2$ 回以上現れるもののうち、最長のものの長さを答えてください。

より厳密には、

- <p>$l_1 + len \leq l_2$</p>
- <p>$S[l_1+i] = S[l_2+i] (i = 0, 1, ..., len - 1)$</p>

を満たす整数 $l_1$ , $l_2$ ( $1 \leq l_1, l_2 \leq N - len + 1$ ) が存在するような正整数 $len$ の最大値を求めてください。そのような $len$ が存在しないときは、$0$ を出力してください。

## 制約

- $2 \leq N \leq 5 \times 10^3$
- $|S| = N$
- $S$ は英小文字から成る

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

非空文字列であって、$S$ の連続する部分文字列として重ならずに $2$ 回以上現れるもののうち、最長のものの長さを出力せよ。そのような非空文字列が存在しないときは、$0$ を出力せよ。

```input1
5
ababa
```

```output1
2
```

条件を満たす文字列として、`a`, `b`, `ab`, `ba` が考えられます。これらの長さの最大値 $2$ が答えです。
`aba` は $S$ の連続する部分文字列として $2$ 度現れますが、$l_1 + len \leq l_2$ を満たすような $l_1$ , $l_2$ が取れないことに注意してください。

```input2
2
xy
```

```output2
0
```

条件を満たす非空文字列は存在しません。

```input3
13
strangeorange
```

```output3
5
```