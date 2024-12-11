配点 : $1000$ 点

## 問題文

すぬけくんは $N$ 個の色が塗られたボールを一列に並べました。
左から $i$ 番目のボールは色 $c_i$ で塗られていて、その重さは $w_i$ です。

すぬけくんは以下の $2$ 種類の操作を任意の順序で何回でも繰り返してボールの配置を変更することができます。

- 操作 $1$：色が同じであるような $2$ つのボールを選ぶ。$2$ つのボールの重さの和が $X$ 以下なら、$2$ つのボールの位置を入れ替える。
- 操作 $2$：色が異なるような $2$ つのボールを選ぶ。$2$ つのボールの重さの和が $Y$ 以下なら、$2$ つのボールの位置を入れ替える。

最終的なボールの色の並びとしてありうるような数列の数を modulo $10^9 + 7$ で求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq X, Y \leq 10^9$
- $1 \leq c_i \leq N$
- $1 \leq w_i \leq 10^9$
- $X,Y,c_i, w_i$ はいずれも整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$ $Y$
> 
> $c_1$ $w_1$
> 
> $:$
> 
> $c_N$ $w_N$

## 出力

答えを出力せよ。

```input1
4 7 3
3 2
4 3
2 1
4 4
```

```output1
2
```

- 操作 $2$ により左から $1$ 番目のボールの位置と左から $3$ 番目のボールの位置を入れ替えることで、$(2,4,3,4)$ という色の並びを作ることが可能です。
- 操作 $1$ により左から $2$ 番目のボールの位置と左から $4$ 番目のボールの位置を入れ替えることも可能ですが、色の並びは変化しません。

```input2
1 1 1
1 1
```

```output2
1
```

```input3
21 77 68
16 73
16 99
19 66
2 87
2 16
7 17
10 36
10 68
2 38
10 74
13 55
21 21
3 7
12 41
13 88
18 6
2 12
13 87
1 9
2 27
13 15
```

```output3
129729600
```