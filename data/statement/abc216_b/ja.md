配点 : $200$ 点

## 問題文

$N$ 人の人がいます。$i \, (1 \leq i \leq N)$ 人目の人の姓は $S_i$、名は $T_i$ です。

同姓同名であるような人の組が存在するか、すなわち $1 \leq i \lt j \leq N$ かつ $S_i=S_j$ かつ $T_i=T_j$ を満たすような整数対 $(i,j)$ が存在するか判定してください。

## 制約

- $2 \leq N \leq 1000$
- $N$ は整数
- $S_i,T_i$ は英小文字のみからなる長さ $1$ 以上 $10$ 以下の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$ $T_1$
> 
> $S_2$ $T_2$
> 
> $\hspace{0.6cm}\vdots$
> 
> $S_N$ $T_N$

## 出力

同姓同名であるような人の組が存在するなら `Yes` を、存在しないなら `No` を出力せよ。

```input1
3
tanaka taro
sato hanako
tanaka taro
```

```output1
Yes
```

$1$ 人目の人と $3$ 人目の人が同姓同名です。

```input2
3
saito ichiro
saito jiro
saito saburo
```

```output2
No
```

同姓同名であるような人の組は存在しません。

```input3
4
sypdgidop bkseq
bajsqz hh
ozjekw mcybmtt
qfeysvw dbo
```

```output3
No
```