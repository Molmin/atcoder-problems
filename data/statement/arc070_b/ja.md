配点 : $600$ 点

## 問題文

シカのAtCoDeerくんは正整数が書かれたカードを $N$ 枚持っています。$i(1 \leq i \leq N)$ 枚目に書かれている数は $a_i$ です。
AtCoDeerくんは大きい数が好きなので、カードに書かれた数の総和が $K$ 以上になるようなカードの部分集合を*よい集合*と呼びます。

そして、各カード $i$ に対して、そのカードが*不必要*かどうかを次のように判定します。

- 「カード $i$ を含む任意の*よい集合*に対して、その集合からカード $i$ を除いたものも*よい集合*」 ならカード $i$ は*不必要*
- それ以外の場合は、*不必要*でない

不必要なカードの枚数を求めてください。ただし、それぞれの判定は独立に行われ、不必要だからと言ってカードが途中で捨てられたりすることはありません。

## 制約

- 入力は全て整数
- $1 \leq N \leq 5000$
- $1 \leq K \leq 5000$
- $1 \leq a_i \leq 10^9 (1 \leq i \leq N)$

## 部分点

- $N,K \leq 400$ を満たすデータセットに正解した場合は、部分点として $300$ 点が与えられる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $a_1$ $a_2$ ... $a_N$

## 出力

不必要なカードの枚数を出力せよ。

```input1
3 6
1 4 3
```

```output1
1
```

よい集合は {$2,3$} と {$1,2,3$} の二つです。

カード $1$ を含むよい集合は {$1,2,3$} しかなく、これから $1$ を取り除いた {$2,3$} もよい集合なので、カード $1$ は不必要です。

また、よい集合である {$2,3$} から $2$ を取り除いた集合 {$3$} はよい集合ではないため、カード $2$ は不必要ではありません。

カード $3$ も同様に不必要ではないため、答えは $1$ です。

```input2
5 400
3 1 4 1 5
```

```output2
5
```

この場合よい集合は存在しないため、全てのカードは不必要となります。

```input3
6 20
10 4 3 10 25 2
```

```output3
3
```