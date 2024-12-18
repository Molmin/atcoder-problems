配点 : $100$ 点

## 問題文

高橋君は $H_1$ 時 $M_1$ 分ちょうどに起き、$H_2$ 時 $M_2$ 分ちょうどに寝ます。
彼は、起きている時間のうち連続する $K$ 分間に勉強をすることにしました。
勉強を開始することができる時間帯の長さは何分でしょうか。

## 制約

- $0 \le H_1, H_2 \le 23$
- $0 \le M_1, M_2 \le 59$
- $H_1$ 時 $M_1$ 分は $H_2$ 時 $M_2$ 分より前の時刻である
- $K \ge 1$
- 高橋君が起きている時間の長さは $K$ 分以上である
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $H_1$ $M_1$ $H_2$ $M_2$ $K$

## 出力

答えを整数として出力せよ。

```input1
10 0 15 0 30
```

```output1
270
```

高橋君は $10$ 時ちょうどに起き、$15$ 時ちょうどに寝ます。勉強にかかる時間は $30$ 分なので、勉強は $10$ 時ちょうどから $14$ 時 $30$ 分ちょうどまでの $270$ 分間の時間帯の間に開始することができます。よって、$270$ を出力します。

```input2
10 0 12 0 120
```

```output2
0
```

高橋君は $10$ 時ちょうどに起き、$12$ 時ちょうどに寝ます。勉強にかかる時間は $120$ 分なので、高橋君はちょうど $10$ 時に勉強を開始する必要があります。よって、$0$ を出力します。