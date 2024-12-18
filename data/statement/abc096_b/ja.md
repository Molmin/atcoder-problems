配点：$200$ 点

## 問題文

黒板に, $3$ つの正の整数 $A, B, C$ が書かれています. E869120 君は, 以下の操作を $K$ 回行います.  

- 黒板に書かれている整数のうち $1$ つを選び, これを $2$ 倍した値に書き換える.

さて, $K$ 回の操作を終えた後の, 黒板に書かれる整数の合計としてありうる最大の値はいくつでしょうか？  

## 制約

- $A, B, C$ は $1$ 以上 $50$ 以下の整数
- $K$ は $1$ 以上 $10$ 以下の整数

## 入力

入力は以下の形式で標準入力から与えられる.  

> $A$ $B$ $C$
> 
> $K$

## 出力

E869120 君が $K$ 回の操作を終えた後の, 黒板に書かれる整数の合計としてありうる最大の値を出力しなさい.  

```input1
5 3 11
1
```

```output1
30
```

この入力例では, 最初, 黒板に $5, 3, 11$ が書かれており, E869120 君は $1$ 回の操作を行うことができます.<br>
そのとき, 彼は次の $3$ つのうちのどれかのことができます.  

1. 「$5$ を $2$ 倍する」という操作を行うとき：最終的に黒板に書かれる整数は $10, 3, 11$ です.
2. 「$3$ を $2$ 倍する」という操作を行うとき：最終的に黒板に書かれる整数は $5, 6, 11$ です.
3. 「$11$ を $2$ 倍する」という操作を行うとき：最終的に黒板に書かれる整数は $5, 3, 22$ です.

3 を選ぶと, 最終的に黒板に書かれる整数の合計は $5 + 3 + 22 = 30$ となり, これは 1. 〜 3. の中で最大です.  

```input2
3 3 4
2
```

```output2
22
```

E869120 君は $2$ 回の操作を行うことができます. 次のような方法で最終的に黒板に書かれる整数の合計が最大になります.<br>
まず, 「$4$ を $2$ 倍する」という操作を行うとき：黒板に書かれた整数は $3, 3, 8$ になります.<br>
次に, 「$8$ を $2$ 倍する」という操作を行うとき：黒板に書かれた整数は $3, 3, 16$ になります.<br>
このとき, 最終的に黒板に書かれる整数の合計は $3 + 3 + 16 = 22$ となります.