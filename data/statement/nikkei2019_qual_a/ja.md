配点 : $100$ 点

## 問題文

私たちは、新聞の購読に関する調査を行いました。
具体的には、調査の対象者 $N$ 人に対し、それぞれ次の $2$ つの質問を行いました。

- 質問 $1$: あなたは新聞 X を購読しているか？
- 質問 $2$: あなたは新聞 Y を購読しているか？

その結果、質問 $1$ に対して「はい」と回答した人の数は $A$ 人、質問 $2$ に対して「はい」と回答した人の数は $B$ 人でした。

このとき、調査の対象者のうち新聞 X, Y の両方を購読している人の数は最大で何人であり、また最小で何人であると考えられるでしょうか？

この問いに答えるプログラムを書いてください。

## 制約

- $1 \leq N \leq 100$
- $0 \leq A \leq N$
- $0 \leq B \leq N$
- 入力される値はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $A$ $B$

## 出力

両方の新聞を購読している人の数として考えられる最大の人数と最小の人数をこの順に、空白で区切って出力せよ。

```input1
10 3 5
```

```output1
3 0
```

この例では、調査の対象者 $10$ 人のうち $3$ 人が新聞 X を購読していると回答し、$5$ 人が新聞 Y を購読していると回答しています。

このとき、両方の新聞を購読している人の数は最大で $3$ 人、最小で $0$ 人です。

```input2
10 7 5
```

```output2
5 2
```

この例では、調査の対象者 $10$ 人のうち $7$ 人が新聞 X を購読していると回答し、$5$ 人が新聞 Y を購読していると回答しています。

このとき、両方の新聞を購読している人の数は最大で $5$ 人、最小で $2$ 人です。

```input3
100 100 100
```

```output3
100 100
```