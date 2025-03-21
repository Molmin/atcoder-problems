配点 : $800$ 点

## 問題文

$N \times M$ のマス目があり、あなたはこれから全てのマスに $1$ 以上 $25$ 以下の整数を $1$ つずつ書き込みます。上から $i$ 行目、左から $j$ 列目のマスに書き込む整数を $a_{i,j}$ とします。

以下の条件を満たす整数の書き込み方を一つ求めてください。本問題の制約下で、条件を満たす整数の書き込み方が必ず存在することが証明できます。

- 任意の整数 $1\leq x_1 &lt; x_2\leq N,1\leq y_1 &lt; y_2 \leq M$ について、$a_{x_1,y_1},a_{x_1,y_2},a_{x_2,y_1},a_{x_2,y_2}$ が全て一致してはならない。

## 制約

- $2 \leq N , M \leq 500$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$

## 出力

条件を満たす書き込み方の $1$ つを、以下の形式で出力せよ。

> $a_{1,1}$ $a_{1,2}$ $\ldots$ $a_{1,M}$
> 
> $a_{2,1}$ $a_{2,2}$ $\ldots$ $a_{2,M}$
> 
> $\vdots$
> 
> $a_{N,1}$ $a_{N,2}$ $\ldots$ $a_{N,M}$

条件を満たす解が複数存在する場合、どれを出力しても正解とみなされる。

```input1
2 3
```

```output1
1 1 1
1 2 3
```

$(x_1,x_2,y_1,y_2)$ の組として考えられるのは $(1,2,1,2),(1,2,2,3),(1,2,1,3)$ の $3$ つです。

どの組についても $4$ マスに書かれた数字が全て一致してはいないので、この出力は条件を満たします。