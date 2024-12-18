配点 : $475$ 点

## 問題文

`1` から `9` までの数字からなる長さ $N$ の文字列 $S$ が与えられます。

整数の組 $(i,j) \ (1\leq i\leq j\leq N)$ に対して、 $f(i,j)$ を「 $S$ の $i$ 文字目から $j$ 文字目までの連続部分文字列を $10$ 進法の整数としてみなしたときの値」とします。$\displaystyle \sum_{i=1}^N \sum_{j=i}^N f(i,j)$ を求めてください。

## 制約

- $1\leq N\leq 2\times 10^5$
- $N$ は整数
- $S$ は `1` から `9` までの数字からなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

答えを出力せよ。

```input1
3
379
```

```output1
514
```

答えは $f(1,1)+f(1,2)+f(1,3)+f(2,2)+f(2,3)+f(3,3)=3+37+379+7+79+9=514$ です。

```input2
30
314159265358979323846264338327
```

```output2
369673254065355789035427227741
```