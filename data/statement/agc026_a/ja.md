配点 : $200$ 点

## 問題文

高橋君は異世界に住んでいます。この世界のスライムの色は $10000$ 色存在し，色 $1, 2, ..., 10000$ と呼ぶことにします。

高橋君は $N$ 匹のスライムを飼っており，スライムは左右に一列に並んでいます。左から $i$ 匹目のスライムの色は $a_i$ です。
もし同じ色どうしのスライムが隣り合っていると，そのスライムたちは合体してしまいます。高橋君は小さいスライムのほうが好きなので，魔法でスライムの色を何匹か変えることにしました。

高橋君は魔法を唱えることで，どれか $1$ 匹のスライムの色を，$10000$ 色のうち好きな色に変えることが出来ます。
どのスライムたちも合体しないようにするには，最小で何回魔法を唱える必要があるでしょうか？

## 制約

- $2 \leq N \leq 100$
- $1 \leq a_i \leq N$
- 入力される値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

高橋君が唱える必要のある魔法の最小回数を出力して下さい。

```input1
5
1 1 2 2 2
```

```output1
2
```

例えば左から $2$ 匹目のスライムの色を$4$，左から $4$ 匹目のスライムの色を $5$ に変えると，
スライムの色は $1, 4, 2, 5, 2$ となり，これで条件を満たします。

```input2
3
1 2 1
```

```output2
0
```

$1$ 匹目と $3$ 匹目のスライムは同じ色ですが隣り合っていないため，魔法を唱える必要はありません。

```input3
5
1 1 1 1 1
```

```output3
2
```

たとえば $2, 4$ 匹目のスライムの色を $2$ に変えると，スライムの色は $1, 2, 1, 2, 1$ となり，これで条件を満たします。

```input4
14
1 2 2 3 3 3 4 4 4 4 1 2 3 4
```

```output4
4
```