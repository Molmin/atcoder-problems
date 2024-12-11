配点 : $400$ 点

## 問題文

あかりさんは $n$ 種類の花を $1$ 本ずつ持っています。

あかりさんは、これらの花から $1$ 本以上を選び、花束を作ろうとしています。

ただし、あかりさんは $a$ と $b$ の $2$ つの数を苦手としていて、いずれかと一致するような本数の花からなる花束は作ることができません。

あかりさんが作ることのできる花束は何種類あるでしょうか。

$(10^9 + 7)$ で割った余りを求めてください。

ここで $2$ つの花束は、一方では使われているが、
もう一方では使われていない種類の花があるとき、別の種類の花束であるとみなします。

## 制約

- 入力は全て整数である。
- $2 \leq n \leq 10^9$
- $1 \leq a &lt; b \leq \textrm{min}(n, 2 \times 10^5)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $n$ $a$ $b$

## 出力

あかりさんが作ることのできる花束の種類数を $(10^9 + 7)$ で割った余りを出力せよ。(そのような花束がないときは `0` と出力せよ。)

```input1
4 1 3
```

```output1
7
```

この場合、あかりさんは $2$ 本または $4$ 本の花を選んで花束を作ることができます。

$4$ 本ある花の中から $2$ 本を選ぶ方法は $6$ 通り、$4$ 本を選ぶ方法は $1$ 通りあるので、
あかりさんが作ることができる花束の種類数は合わせて $7$ 通りです。

```input2
1000000000 141421 173205
```

```output2
34076506
```

$(10^9 + 7)$ で割った余りを出力してください。