配点 : $200$ 点

## 問題文

高橋君の仲間たちは $N$ 人で遊園地に遊びにいきました。

遊園地の一番人気のジェットコースターに乗るためには、身長が $K$ cm以上必要です。

高橋君の $i$ 番目の仲間の身長は $h_i$ cm です。

高橋君の仲間たちのうち、一番人気のジェットコースターに乗ることができる人の数を求めてください。

## 制約

- $1 \le N \le 10^5$
- $1 \le K \le 500$
- $1 \le h_i \le 500$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $h_1$ $h_2$ $\ldots$ $h_N$

## 出力

高橋君の仲間たちのうち、一番人気のジェットコースターに乗ることのできる人の数を出力してください。

```input1
4 150
150 140 100 200
```

```output1
2
```

一番人気のジェットコースターに乗ることができるのは、$1$ 番目の仲間と $4$ 番目の仲間の $2$ 人です。

```input2
1 500
499
```

```output2
0
```

```input3
5 1
100 200 300 400 500
```

```output3
5
```