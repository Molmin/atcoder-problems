配点 : $200$ 点

## 問題文

ある店で $N$ 種類の果物、果物 $1, \ldots, N$ が売られており、それぞれの価格は一個あたり $p_1, \ldots, p_N$ 円です。

この店で $K$ 種類の果物を一個ずつ買うとき、それらの合計価格として考えられる最小の金額を求めてください。

## 制約

- $1 \leq K \leq N \leq 1000$
- $1 \leq p_i \leq 1000$
- 入力中の値はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $p_1$ $p_2$ $\ldots$ $p_N$

## 出力

果物の最小の合計価格を表す整数を出力せよ。

```input1
5 3
50 100 80 120 80
```

```output1
210
```

この店では、果物 $1, 2, 3, 4, 5$ がそれぞれ $50$ 円、$100$ 円、$80$ 円、$120$ 円、$80$ 円で売られています。

これらから $3$ 種類を買うときの最小合計価格は、果物 $1, 3, 5$ を買うときの $50 + 80 + 80 = 210$ 円です。

```input2
1 1
1000
```

```output2
1000
```