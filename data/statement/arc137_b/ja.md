配点 : $400$ 点

## 問題文

$0,1$ からなる長さ $N$ の整数列 $A=(A_1,A_2,\cdots,A_N)$ が与えられます．

あなたはこれから，次の操作をちょうど $1$ 回行います．

- $A$ の**連続する**部分列を選び，そこに含まれる要素を flip する．つまり，$0$ ならば $1$ に変え，$1$ ならば $0$ に変える．
なお，ここで選ぶ部分列は空であることも許され，その場合 $A$ の要素は全く変化しない．

あなたのスコアは，$A$ に含まれる $1$ の個数です．
あなたが取るスコアとしてあり得る値が何通りあるか求めてください．

## 制約

- $1 \leq N \leq 3 \times 10^5$
- $0 \leq A_i \leq 1$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

答えを出力せよ．

```input1
4
0 1 1 0
```

```output1
4
```

スコアとしてあり得る値は，$0,1,2,3$ の $4$ 通りです．
例えば，$A$ の $2$ 番目から $4$ 番目までの要素を flip すると，$A=(0,0,0,1)$ となり，スコアは $1$ になります．

```input2
5
0 0 0 0 0
```

```output2
6
```

```input3
6
0 1 0 1 0 1
```

```output3
3
```