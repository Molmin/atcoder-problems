配点 : $100$ 点

## 問題文

高橋君は、プログラミングコンテストを何回か開くことにしました。<br>
コンテストを $1$ 回開くには、$100$ 点問題、$200$ 点問題、$300$ 点問題、$400$ 点問題が $1$ 問ずつ必要です。<br>
$100, 200, 300, 400$ 点問題の案がそれぞれ $A_1, A_2, A_3, A_4$ 個あるとき、コンテストを最大で何回開けるでしょうか？<br>
なお、同じ問題案は $1$ 度しか使えません。

## 制約

- $1 \le A_i \le 100$ $(1 \le i \le 4)$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{7pt} A_4$

## 出力

コンテストを開催可能な最大回数を表す整数を出力せよ。  

```input1
5 3 7 11
```

```output1
3
```

$100, 200, 300, 400$ 点問題の案を $3$ つずつ使って、コンテストを $3$ 回開くことができます。<br>
$200$ 点問題の案が $3$ つしかないため、$4$ 回開くことはできません。  

```input2
100 100 1 100
```

```output2
1
```

問題案が $1$ つでも足りないとコンテストは開催できません。