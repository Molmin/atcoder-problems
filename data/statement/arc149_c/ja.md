配点 : $500$ 点

## 問題文

正整数 $N$ が与えられます．

$N$ 行 $N$ 列からなるマス目の各マスに $N^2$ 以下の正整数を $1$ つずつ書き込んで，以下の条件がすべて成り立つようにしてください．

- 上下左右の $4$ 方向いずれかに隣接する $2$ マスに書き込まれた正整数の和は，どれも素数ではない．
- $N^2$ 以下の正整数はすべてどれかのマスに $1$ 度ずつ書き込まれている．

なお本問題の制約のもと，このような書き込み方が必ず存在することが証明できます．

## 制約

- $3\leq N\leq 1000$

## 入力

入力は以下の形式で標準入力から与えられます．

> $N$

## 出力

$i$ 行 $j$ 列に書き込む正整数を $A_{ij}$ として，条件を満たす書き込み方を，以下の形式で出力してください．

> $A_{11}$ $\ldots$ $A_{1N}$
> 
> $\vdots$
> 
> $A_{N1}$ $\ldots$ $A_{NN}$

条件を満たす書き込み方が複数存在する場合は，どれを出力しても正解となります．

```input1
4
```

```output1
15 11 16 12
13 3 6 9
14 7 8 1
4 2 10 5
```

このマス目には $1$ 以上 $16$ 以下の正整数がすべて $1$ 度ずつ書き込まれています．また隣接する $2$ マスに書き込まれた正整数の和には
$15+11=26$, $11+16=27$, $15+13=28$ などがありますが，これらはすべて素数ではありません．