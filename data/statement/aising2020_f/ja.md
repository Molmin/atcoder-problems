配点 : $600$ 点

## 問題文

整数 $N$ が与えられます。すぬけ君は整数 $s_1,s_2,n_1,n_2,u_1,u_2,k_1,k_2,e_1,e_2$ を以下の $6$ つの条件の全てを満たすように選びます。

- $0 \leq s_1 &lt; s_2$
- $0 \leq n_1 &lt; n_2$
- $0 \leq u_1 &lt; u_2$
- $0 \leq k_1 &lt; k_2$
- $0 \leq e_1 &lt; e_2$
- $s_1 + s_2 + n_1 + n_2 + u_1 + u_2 + k_1 + k_2 + e_1 + e_2 \leq N$

ありうる $(s_1,s_2,n_1,n_2,u_1,u_2,k_1,k_2,e_1,e_2)$ の組すべてについて $(s_2 - s_1)(n_2 - n_1)(u_2 - u_1)(k_2 - k_1)(e_2 - e_1)$ を計算し、その総和を $(10^{9} +7)$ で割ったあまりを求めてください。

テストケースは $T$ 個与えられるので、それぞれについて答えを求めてください。

## 制約

- 与えられる入力は全て整数
- $1 \leq T \leq 100$
- $1 \leq N \leq 10^{9}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

各ケースは以下の形式で与えられる。

> $N$

## 出力

$T$ 行出力せよ。$i$ 行目には $i$ 番目のテストケースに対する答えを出力せよ。

```input1
4
4
6
10
1000000000
```

```output1
0
11
4598
257255556
```

- $N=4$ のとき $(s_1,s_2,n_1,n_2,u_1,u_2,k_1,k_2,e_1,e_2)$ としてありうる組は存在しません。よって、答えは $0$ です。
- $N=6$ のとき $(s_1,s_2,n_1,n_2,u_1,u_2,k_1,k_2,e_1,e_2)$ としてありうる組は以下の $6$ 通りです。-   - $(0,1,0,1,0,1,0,1,0,1)$
-   - $(0,2,0,1,0,1,0,1,0,1)$
-   - $(0,1,0,2,0,1,0,1,0,1)$
-   - $(0,1,0,1,0,2,0,1,0,1)$
-   - $(0,1,0,1,0,1,0,2,0,1)$
-   - $(0,1,0,1,0,1,0,1,0,2)$
- $(s_2 - s_1)(n_2 - n_1)(u_2 - u_1)(k_2 - k_1)(e_2 - e_1)$ の値が $1$ となるものが $1$ 通り、$2$ となるものが $5$ 通りあるので、答えは $11$ です。
- $(10^{9} +7)$ で割ったあまりを求める必要があることに注意してください。