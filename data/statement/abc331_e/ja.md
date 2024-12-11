配点 : $450$ 点

## 問題文

AtCoder 食堂では主菜と副菜からなる定食が販売されています。<br>
主菜は $N$ 種類あり、順に主菜 $1$, 主菜 $2$, $\dots$, 主菜 $N$ と呼びます。主菜 $i$ の価格は $a_i$ 円です。<br>
副菜は $M$ 種類あり、順に副菜 $1$, 副菜 $2$, $\dots$, 副菜 $M$ と呼びます。副菜 $i$ の価格は $b_i$ 円です。

定食は主菜と副菜を $1$ 種類ずつ選んで構成されます。定食の価格は選んだ主菜の価格と副菜の価格の和です。  <br>
ただし、$L$ 個の相異なる組 $(c_1, d_1), \dots, (c_L, d_L)$ について、主菜 $c_i$ と副菜 $d_i$ からなる定食は食べ合わせが悪いため提供されていません。<br>
つまり、提供されている定食は $NM - L$ 種類あることになります。(提供されている定食が少なくとも $1$ 種類存在することが制約によって保証されています。)  

提供されている定食のうち、最も価格の高い定食の価格を求めてください。

## 制約

- $1 \leq N, M \leq 10^5$
- $0 \leq L \leq \min(10^5, N M - 1)$
- $1 \leq a_i, b_i \leq 10^9$
- $1 \leq c_i \leq N$
- $1 \leq d_j \leq M$
- $i \neq j$ ならば $(c_i, d_i) \neq (c_j, d_j)$
- 入力される値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $L$
> 
> $a_1$ $a_2$ $\dots$ $a_N$
> 
> $b_1$ $b_2$ $\dots$ $b_M$
> 
> $c_1$ $d_1$
> 
> $c_2$ $d_2$
> 
> $\vdots$
> 
> $c_L$ $d_L$

## 出力

提供されている定食のうち、最も価格の高い定食が何円であるかを出力せよ。

```input1
2 3 3
2 1
10 30 20
1 2
2 1
2 3
```

```output1
31
```

提供されている定食、及びその価格は次の $3$ 種類です。

- 主菜 $1$ と副菜 $1$ からなる定食。価格は $2 + 10 = 12$ 円である。
- 主菜 $1$ と副菜 $3$ からなる定食。価格は $2 + 20 = 22$ 円である。
- 主菜 $2$ と副菜 $2$ からなる定食。価格は $1 + 30 = 31$ 円である。

この中で最も高い定食は $3$ 番目の定食です。よって $31$ を出力してください。

```input2
2 1 0
1000000000 1
1000000000
```

```output2
2000000000
```

```input3
10 10 10
47718 21994 74148 76721 98917 73766 29598 59035 69293 29127
7017 46004 16086 62644 74928 57404 32168 45794 19493 71590
1 3
2 6
4 5
5 4
5 5
5 6
5 7
5 8
5 10
7 3
```

```output3
149076
```