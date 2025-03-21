配点 : $400$ 点

## 問題文

長さ $N$ の非負整数列 $A_1,A_2,\cdots,A_N$ が与えられます．

この数列の隣接する $2$ 項の間に `+` または `-` を入れて，一つの式を作ることを考えます．

式を作る方法は $2^{N-1}$ 通りありますが，この中でも以下の条件を満たす式を，**良い式**と呼ぶことにします．

- `-` が $2$ 回以上連続で登場しない．

全ての良い式の値を足し合わせた値を求めて下さい．
なお，この値はかならず非負整数となることが証明できます．
そこで，この値を $10^9+7$ で割った余りを出力してください．

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## 出力

答えを $10^9+7$ で割った余りを出力せよ．

```input1
3
3 1 5
```

```output1
15
```

以下の $3$ 通りの良い式が考えられます．

- <p>$3+1+5=9$</p>
- <p>$3+1-5=-1$</p>
- <p>$3-1+5=7$</p>

$3-1-5$ は `-` が $2$ 回以上連続で登場するため，良い式ではありません．
よって，答えは $9+(-1)+7=15$ となります．

```input2
4
1 1 1 1
```

```output2
10
```

以下の $5$ 通りの良い式が考えられます．

- <p>$1+1+1+1=4$</p>
- <p>$1+1+1-1=2$</p>
- <p>$1+1-1+1=2$</p>
- <p>$1-1+1+1=2$</p>
- <p>$1-1+1-1=0$</p>

よって答えは $4+2+2+2+0=10$ となります．

```input3
10
866111664 178537096 844917655 218662351 383133839 231371336 353498483 865935868 472381277 579910117
```

```output3
279919144
```

答えを $10^9+7$ で割った余りを出力してください．