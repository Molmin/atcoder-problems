配点 : $400$ 点

## 問題文

$(1,2,\cdots,2N)$ の順列 $P=(P_1,P_2,\cdots,P_{2N})$ が与えられます．

あなたは，以下の操作を $0$ 回以上 $N$ 回以下行うことができます．

- 整数 $x$ ($1 \leq x \leq 2N-1$) を選ぶ．
$P_x$ と $P_{x+1}$ の値を入れ替える．

操作後の $P$ が以下の条件を満たすような操作列を $1$ つ示してください．

- 各 $i=1,3,5,\cdots,2N-1$ について，$P_i&lt;P_{i+1}$ である．
- 各 $i=2,4,6,\cdots,2N-2$ について，$P_i &gt; P_{i+1}$ である．

なお，条件を満たすような操作列が必ず存在することが証明できます．

## 制約

- $1 \leq N \leq 10^5$
- $(P_1,P_2,\cdots,P_{2N})$ は $(1,2,\cdots,{2N})$ の順列
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_{2N}$

## 出力

以下の形式で操作列を出力せよ．

> $K$
> 
> $x_1$ $x_2$ $\cdots$ $x_K$

ここで，$K$ は行う操作の回数 ($0 \leq K \leq N$) であり，$x_i$ ($1 \leq x_i \leq 2N-1$) は $i$ 回目の操作で選ぶ $x$ の値である．
条件を満たす解が複数存在する場合，どれを出力しても正解とみなされる．

```input1
2
4 3 2 1
```

```output1
2
1 3
```

操作後は $P=(3,4,1,2)$ となり，条件を満たします．

```input2
1
1 2
```

```output2
0
```