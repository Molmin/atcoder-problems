配点 : $700$ 点

## 問題文

今日のすぬけ君のおやつは $B$ 個の黒いチョコレートと $W$ 個の白いチョコレートです。

すぬけ君は以下の手続きをチョコレートがなくなるまで繰り返します。

- 黒か白を等確率で選び、選んだ色のチョコレートが存在するなら $1$ つ食べる。

$1$ 以上 $B+W$ 以下の各整数 $i$ について、すぬけ君が $i$ 番目に食べたチョコレートの色が黒である確率を求めてください。
これらの確率は有理数となることが示せます。これらを注記で述べるように modulo $10^{9}+7$ で出力してください。

## 注記

有理数を出力する際は、まずその有理数を分数 $\frac{y}{x}$ として表してください。ここで、$x, y$ は整数であり、$x$ は $10^9 + 7$ で割り切れてはなりません (この問題の制約下で、そのような表現は必ず可能です)。そして、$xz \equiv y \pmod{10^9 + 7}$ を満たすような $0$ 以上 $10^9 + 6$ 以下の唯一の整数 $z$ を出力してください。

## 制約

- 入力は全て整数である。
- $1 \leq B,W \leq 10^{5}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $B$ $W$

## 出力

答えを $B+W$ 行に出力せよ。$i$ 行目ではすぬけ君が $i$ 番目に食べたチョコレートの色が黒である確率を注記で述べるように modulo $10^{9}+7$ で出力せよ。

```input1
2 1
```

```output1
500000004
750000006
750000006
```

- チョコレートを食べる順序としてありうるものは以下の $3$ 通りで、そのような食べ方が生じる確率はそれぞれ $\frac{1}{2}, \frac{1}{4}, \frac{1}{4}$ です。-   - 白、黒、黒
-   - 黒、白、黒
-   - 黒、黒、白
- よって、$1$ 番目、$2$ 番目、$3$ 番目に食べたチョコレートが黒である確率はそれぞれ $\frac{1}{2},\frac{3}{4},\frac{3}{4}$ です。

```input2
3 2
```

```output2
500000004
500000004
625000005
187500002
187500002
```

- それぞれ $\frac{1}{2},\frac{1}{2},\frac{5}{8},\frac{11}{16},\frac{11}{16}$ です。

```input3
6 9
```

```output3
500000004
500000004
500000004
500000004
500000004
500000004
929687507
218750002
224609377
303710940
633300786
694091802
172485353
411682132
411682132
```