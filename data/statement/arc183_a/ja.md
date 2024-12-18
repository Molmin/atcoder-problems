配点 : $400$ 点

## 問題文

正整数 $N,K$ が与えられます．

$1$ 以上 $N$ 以下の整数がそれぞれ $K$ 回ずつ登場する長さ $NK$ の整数列を **good** な整数列と呼ぶことにします．

good な整数列の個数を $S$ とおきます．
辞書順で $\operatorname{floor}((S+1)/2)$ 番目の good な整数列を求めてください．
なお，$\operatorname{floor}(x)$ は $x$ を超えない最大の整数を表します．

 数列の辞書順とは？

数列 $S = (S_1,S_2,\ldots,S_{|S|})$ が数列 $T = (T_1,T_2,\ldots,T_{|T|})$ より**辞書順で小さい**とは，下記の 1. と 2. のどちらかが成り立つことを言います．
ここで，$|S|, |T|$ はそれぞれ $S, T$ の長さを表します．

1. $|S| \lt |T|$ かつ $(S_1,S_2,\ldots,S_{|S|}) = (T_1,T_2,\ldots,T_{|S|})$．
2. ある整数 $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ が存在して，下記の $2$ つがともに成り立つ．
1.    - $(S_1,S_2,\ldots,S_{i-1}) = (T_1,T_2,\ldots,T_{i-1})$
2.    - $S_i$ が $T_i$ より（数として）小さい．

## 制約

- $1 \leq N \leq 500$
- $1 \leq K \leq 500$
- 入力される値はすべて整数

## 入力

入力は標準入力から以下の形式で与えられる．

> $N$ $K$

## 出力

答えの整数列を，要素を空白区切りにして出力せよ．

```input1
2 2
```

```output1
1 2 2 1
```

good な整数列は以下の $6$ 通りです．

- $(1,1,2,2)$
- $(1,2,1,2)$
- $(1,2,2,1)$
- $(2,1,1,2)$
- $(2,1,2,1)$
- $(2,2,1,1)$

よって，この中で辞書順で $3$ 番目の $(1,2,2,1)$ が答えになります．

```input2
1 5
```

```output2
1 1 1 1 1
```

```input3
6 1
```

```output3
3 6 5 4 2 1
```

```input4
3 3
```

```output4
2 2 2 1 3 3 3 1 1
```