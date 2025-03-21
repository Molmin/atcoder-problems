配点 : $100$ 点

## 問題文

正整数 $X, M \ (X \leq M)$ が与えられます．

あなたは $M$ 以下の正整数が好きですが，例外として $X$ だけは嫌いです．そこで，次の条件を満たす集合 $S$ を作ることにしました．

- $S$ は $10^5$ 以下の相異なる正整数のみからなる．
- $S$ の要素数は $20$ 以下である．
- $1 \leq k \leq M, \ k \neq X$ を満たす任意の正整数 $k$ に対して， $S$ の部分集合で要素の総和が $k$ であるものが存在する．
- $S$ の部分集合で要素の総和が $X$ であるものは存在しない．

このような集合 $S$ が存在するかどうかを判定し，存在する場合は $1$ つ示してください．

$1$ つの入力につき， $T$ 個のテストケースに答えてください．

## 制約

- $1 \leq T \leq 100$
- $1 \leq X \le M \leq 10^5$
- $M \geq 2$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

各テストケースは次の形式で与えられる．

> $X \ M$

## 出力

各テストケースについて， 条件を満たす $S$ が存在しない場合は $-1$ を，存在する場合は $S$ の例を $1$ つ次の形式で出力せよ．

> $N$
> 
> $a_1 \ a_2 \ \dots \ a_N$

ここで， $N$ は $S$ の要素数を， $(a_1, a_2, \dots, a_N)$ は $S$ の要素を昇順に並べた列を表し，それぞれ次の制約を満たさなければならない．

- $1 \leq N \leq 20$
- $1 \leq a_1 \lt a_2 \lt \dots \lt a_N \leq 10^5$

また，各テストケースごとに出力を改行せよ．

```input1
3
4 6
3 7
11 11
```

```output1
3
1 2 5
-1
4
1 2 3 4
```

- $1$ つ目のケースでは， $S=\lbrace 1, 2, 5 \rbrace$ などが条件を満たします．
- $2$ つ目のケースで条件を満たす $S$ はありません．
- $3$ つ目のケースでは， $S=\lbrace 1, 2, 3, 4 \rbrace$ などが条件を満たします．