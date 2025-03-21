配点 : $300$ 点

## 問題文

高橋君は部屋に PC を沢山置こうとしています。そこで最大何台の PC を部屋に置けるか調べるプログラムを書くことにしました。

$H$ 個の長さ $W$ の `.`, `T` からなる文字列 $S_1,S_2,\ldots,S_H$ が与えられます。 

高橋君は以下の操作を $0$ 回以上何回でも行うことができます。

- $1\leq i \leq H, 1 \leq j \leq W-1$ を満たす整数であって、 $S_i$ の $j$ 番目の文字も $j+1$ 番目の文字も `T` であるようなものを選ぶ。 $S_i$ の $j$ 番目の文字を `P` で置き換え、$S_i$ の $j+1$ 番目の文字を `C` で置き換える。

高橋君が操作回数の最大化を目指すとき、操作終了後の $S_1,S_2,\ldots,S_H$ としてあり得るものの一例を出力してください。

## 制約

- $1\leq H \leq 100$
- $2\leq W \leq 100$
- $H$ と $W$ は整数である
- $S_i$ は `.`, `T` からなる長さ $W$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ 
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_H$

## 出力

高橋君が操作回数の最大化を目指すとき、操作終了後の $S_1,S_2,\ldots,S_H$ としてあり得るものの一例を改行区切りで出力せよ。

解が複数存在する場合、どれを出力しても正答とみなされる。

```input1
2 3
TTT
T.T
```

```output1
PCT
T.T
```

可能な操作回数の最大値は $1$ です。

例えば、 $(i,j)=(1,1)$ として操作を行うと、$S_1$ が `PCT` に変化します。

```input2
3 5
TTT..
.TTT.
TTTTT
```

```output2
PCT..
.PCT.
PCTPC
```