配点 : $500$ 点

## 問題文

すぬけ君は高橋君と青木君にプレゼントを $1$ 個ずつ渡そうと考えています。<br>
プレゼントの候補は $N$ 種類あり、$i$ 番目の候補は、高橋君にとって嬉しさ $A_i$ 、青木君にとって嬉しさ $B_i$ です。

高橋君と青木君はとても嫉妬深いので、相手がもらったプレゼントの自分にとっての嬉しさが、自分がもらったプレゼントの自分にとっての嬉しさより大きい場合、相手に嫉妬してけんかになってしまいます。

$N^2$ 通りあるプレゼントの渡し方のうち、高橋君と青木君がけんかしないようなものは何通りありますか？

## 制約

- $1 \leq N \leq 2\times 10^5$
- $0 \leq A_i \leq 10^9$
- $0 \leq B_i \leq 10^9$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $B_1$ $\ldots$ $B_N$

## 出力

答えを出力せよ。  

```input1
3
50 100 150
1 3 2
```

```output1
4
```

例えば高橋君に $1$ 番目の候補を、青木君に $2$ 番目の候補をプレゼントした場合、
青木君がもらったプレゼントの高橋君にとっての嬉しさが $100$、
高橋君がもらったプレゼントの高橋君にとっての嬉しさは $50$ 
なので、高橋君は青木君に嫉妬し、けんかしてしまいます。

また、例えば高橋君に $3$ 番目の候補を、青木君に $2$ 番目の候補をプレゼントした場合、$2$ 人はけんかしません。

$2$ 人に同じものをプレゼントしてもよいことに注意してください。

```input2
3
123456789 123456 123
987 987654 987654321
```

```output2
6
```

```input3
10
3 1 4 1 5 9 2 6 5 3
2 7 1 8 2 8 1 8 2 8
```

```output3
37
```