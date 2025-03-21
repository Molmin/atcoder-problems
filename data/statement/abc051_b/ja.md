配点 : $200$ 点

## 問題文

$2$ つの整数 $K,S$ が与えられます。<br>
$3$ つの変数 $X,Y,Z$ があり、$0 \leq X,Y,Z \leq K$ を満たす整数の値を取ります。<br>
$X + Y + Z = S$ を満たす $X,Y,Z$ への値の割り当ては何通りありますか。  

## 制約

- $2 \leq K \leq 2500$
- $0 \leq S \leq 3K$
- $K,S$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。  

> $K$ $S$

## 出力

問題文の条件を満たす $X,Y,Z$ の組が何通りあるか出力せよ。

```input1
2 2
```

```output1
6
```

問題文の条件を満たす $X,Y,Z$ の組は以下の $6$ 通りです。  

- $X = 0, Y = 0, Z = 2$
- $X = 0, Y = 2, Z = 0$
- $X = 2, Y = 0, Z = 0$
- $X = 0, Y = 1, Z = 1$
- $X = 1, Y = 0, Z = 1$
- $X = 1, Y = 1, Z = 0$

```input2
5 15
```

```output2
1
```

$X + Y + Z$ の最大値は $15$ であり、それを満たす組は $1$ 通りです。