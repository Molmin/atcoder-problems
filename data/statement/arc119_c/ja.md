配点: $500$ 点

## 問題文

AtCoder 街道には $N$ 棟のビルが建っており、西から順に $1$ から $N$ までの番号が付けられています。最初の時点では、ビルの高さはそれぞれ $A_1, A_2, \dots, A_N$ です。

ARC 解体業者の社長である高橋君は、整数 $l, r$ $(1 \leq l \lt r \leq N)$ を選び、ビル $l, l+1, \dots, r$ の高さをすべて $0$ にしようと計画しています。この際に、以下の $2$ 種類の操作を好きな順番で何回でも行うことができます。

- 整数 $x$ $(l \leq x \leq r-1)$ を決めて、ビル $x$・ビル $x+1$ の高さを $1$ ずつ増やす
- 整数 $x$ $(l \leq x \leq r-1)$ を決めて、ビル $x$・ビル $x+1$ の高さを $1$ ずつ減らす（この操作は両方のビルの高さが $1$ 以上のときのみ可能）

選べる $x$ の範囲が $(l,r)$ に依存することに注意してください。

高橋君が計画を達成することが可能な $(l, r)$ の選び方は何通りあるでしょうか？

## 制約

- $2 \leq N \leq 300000$
- $1 \leq A_i \leq 10^9$ $(1 \leq i \leq N)$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられます。  

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

答えを出力してください。

```input1
5
5 8 8 6 6
```

```output1
3
```

$(l, r) = (2, 3), (4, 5), (2, 5)$ については、高橋君は目的を達成することができます。

例えば、$(l, r) = (2, 5)$ と選ぶとき、例えば以下の順に操作を行うことで、ビル $2, 3, 4, 5$ の高さを $0$ にできます。

- 「ビル $4, 5$ の高さを $1$ ずつ減らす」操作を $6$ 回続けて行う
- 「ビル $2, 3$ の高さを $1$ ずつ減らす」操作を $8$ 回続けて行う

残り $7$ 種類の $(l, r)$ の選び方については、どのような操作の手順をとっても、高橋君は目的を達成することができません。

```input2
7
12 8 11 3 3 13 2
```

```output2
3
```

$(l, r) = (2, 4), (3, 7), (4, 5)$ については、高橋君は目的を達成することができます。

例えば、$(l, r) = (3, 7)$ と選ぶとき、以下の図のように操作を行うことが考えられます。

![](https://img.atcoder.jp/arc119/392b686a479008a3dbc3fb36893ed144.png)

```input3
10
8 6 3 9 5 4 7 2 1 10
```

```output3
1
```

高橋君が目的を達成できるのは、$(l, r) = (3, 8)$ のときしかありません。

```input4
14
630551244 683685976 249199599 863395255 667330388 617766025 564631293 614195656 944865979 277535591 390222868 527065404 136842536 971731491
```

```output4
8
```