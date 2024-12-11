配点 : $400$ 点

## 問題文

高橋君は $2$ 以上の整数が書かれた $N$ 個のボールを持っており、これらを細長い筒の中に落としていきます。$i \, (1 \leq i \leq N)$ 回目には、$a_i$ が書かれたボールを落とします。

ボールは特殊な材質でできており、筒の中において $k \, (k \geq 2)$ が書かれたボールが $k$ 個連続すると、それら $k$ 個のボールは全て消えてしまいます。

各 $i \, (1 \leq i \leq N)$ について、$i$ 個目のボールを筒の中に落とした後、筒の中に何個のボールがあるか求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $2 \leq a_i \leq 2 \times 10^5 \, (1 \leq i \leq N)$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $\ldots$ $a_N$

## 出力

$N$ 行出力せよ。$i \, (1 \leq i \leq N)$ 行目には、$i$ 個目のボールを筒の中に落とした後、筒の中にあるボールの個数を出力せよ。

```input1
5
3 2 3 2 2
```

```output1
1
2
3
4
3
```

筒の中は次のように変化します。

- $1$ 個目のボールを落とす。筒の中にあるボールに書かれた整数は $3$ である。
- $2$ 個目のボールを落とす。筒の中にあるボールに書かれた整数は下から順に $3, 2$ である。
- $3$ 個目のボールを落とす。筒の中にあるボールに書かれた整数は下から順に $3, 2, 3$ である。
- $4$ 個目のボールを落とす。筒の中にあるボールに書かれた整数は下から順に $3, 2, 3, 2$ である。
- $5$ 個目のボールを落とす。筒の中にあるボールに書かれた整数は下から順に $3, 2, 3, 2, 2$ となるが、$2$ が書かれたボールが $2$ 個連続しているのでこれらは消え、下から順に $3, 2, 3$ となる。

![](https://img.atcoder.jp/ghi/ABC240D_sample.png)

```input2
10
2 3 2 3 3 3 2 3 3 2
```

```output2
1
2
3
4
5
3
2
3
1
0
```