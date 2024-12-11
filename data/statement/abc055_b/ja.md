配点 : $200$ 点

## 問題文

すぬけくんはトレーニングが好きなので $N$ 回だけトレーニングすることにしました。

すぬけくんのトレーニング開始前のパワーは $1$ です。すぬけくんが $i$ 回目のトレーニングを終えるとパワーが $i$ 倍されます。

すぬけくんが $N$ 回トレーニングをしたあとのパワーを求めなさい。ただし、答えの値は非常に大きな値になることがあるので $10^{9}+7$ で割ったあまりを出力してください。

## 制約

- $1 \leq N \leq 10^{5}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを $10^{9}+7$ で割ったあまりを出力せよ。

```input1
3
```

```output1
6
```

- $1$ 回目のトレーニングを終えると、パワーは $1$ 倍され $1$ になります
- $2$ 回目のトレーニングを終えると、パワーは $2$ 倍され $2$ になります
- $3$ 回目のトレーニングを終えると、パワーは $3$ 倍され $6$ になります

```input2
10
```

```output2
3628800
```

```input3
100000
```

```output3
457992974
```

答えを $10^{9}+7$ で割ったあまりを出力してください。