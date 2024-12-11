配点 : $800$ 点

## 問題文

$N$ 頂点の木が与えられます。ここで、$N$ は **奇数** です。
木の頂点には $1$ から $N$ までの、辺には $1$ から $N-1$ までの番号が付けられています。
辺 $i$ は頂点 $u_i, v_i$ を結び、初期状態での重みは $w^1_i$ です。

あなたは、次の操作を何度でも行えます。

- 木から辺 $(u, v)$ を選ぶ。この辺の現在の重みが $w$ であるとする。$u, v$ のいずれかちょうど一方に接続する各辺について、その重みを $w$ との **XOR** に置き換える（操作前の辺の重みが $w_1$ であるとすると、操作後の重みは $w_1 \oplus w$ となる）。

あなたの目標は、各辺 $i$ の重みを $w^2_i$ とすることです。
上記の操作を何度でも行えるとして、目標の達成が可能か判定してください。

## 制約

- $1 \le N \le 10^5$
- $N$ は奇数である。
- $1\le u_i, v_i \le N$
- $u_i \neq v_i$
- $0\le w^1_i, w^2_i &lt; 2^{30}$
- 入力中の値は全て整数である。
- 入力が表すグラフは木である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $u_1$ $v_1$ $w^1_1$ $w^2_1$
> 
> $u_2$ $v_2$ $w^1_2$ $w^2_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$ $w^1_{N-1}$ $w^2_{N-1}$

## 出力

目標とする重みの割り当てに初期状態から至ることが可能であれば `YES`、そうでなければ `NO` と出力せよ。
なお、正誤判定器は英大文字と英小文字を区別せず、どちらも受理する。

```input1
3
1 2 1 1
2 3 8 9
```

```output1
YES
```

辺 $1$ に対して操作を行うと、辺 $2$ の重みが $8 \oplus 1=9$ となります。

```input2
5
1 2 0 3
1 3 1 0
1 4 2 1
1 5 0 0
```

```output2
NO
```