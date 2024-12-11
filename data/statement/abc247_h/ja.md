配点 : $600$ 点

## 問題文

人 $1$, 人 $2$, $\dots$, 人 $N$ の $N$ 人の人がいて、前から $(1,2,\dots,N)$ の順に一列に並んでいます。人 $i$ は色 $c_i$ の服を着ています。<br>
高橋君は任意の $2$ 人 $i,j$ を選んで人 $i$ と人 $j$ の位置を入れ替える操作を $K$ 回繰り返しました。<br>
$K$ 回の操作を終了した時点で、$1 \leq i \leq N$ を満たすすべての整数 $i$ に対して、前から $i$ 番目の人が着ている服の色は $c_i$ と一致しました。<br>
$K$ 回の操作を終了した後にあり得る人の並び方は何通りありますか？ 答えを $998244353$ で割ったあまりを求めてください。

## 制約

- $2 \leq N \leq 200000$
- $1 \leq K \leq 10^9$
- $1 \leq c_i \leq N$
- 入力される値はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $c_1$ $c_2$ $\dots$ $c_N$

## 出力

答えを出力せよ。

```input1
4 1
1 1 2 1
```

```output1
3
```

高橋君の操作、および操作後の列としてあり得るものをすべて挙げると次のようになります。

- 人 $1$ と人 $2$ の位置を入れ替える。操作後の並び方は $(2, 1, 3, 4)$ となる。
- 人 $1$ と人 $4$ の位置を入れ替える。操作後の並び方は $(4, 2, 3, 1)$ となる。
- 人 $2$ と人 $4$ の位置を入れ替える。操作後の並び方は $(1, 4, 3, 2)$ となる。

```input2
3 3
1 1 2
```

```output2
1
```

あり得る高橋君の操作の例を 1 つ挙げると次のようになります。

- $1$ 回目の操作で人 $1$ と人 $3$ の位置を入れ替える。操作後の並び方は $(3, 2, 1)$ となる。<br>
    $2$ 回目の操作で人 $2$ と人 $3$ の位置を入れ替える。操作後の並び方は $(2, 3, 1)$ となる。<br>
    $3$ 回目の操作で人 $1$ と人 $3$ の位置を入れ替える。操作後の並び方は $(2, 1, 3)$ となる。

操作の途中においては、前から $i$ 番目の人の服の色が $c_i$ と必ずしも一致しなくてもよいのに注意してください。  

```input3
10 4
2 7 1 8 2 8 1 8 2 8
```

```output3
132
```