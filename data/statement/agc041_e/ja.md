配点 : $1600$ 点

## 問題文

*平衡ネットワーク* とは、左から右へと延びる $N$ 本のケーブルと、それぞれ $2$ 本のケーブルを繋ぐ $M$ 個の *平衡器* からなる抽象機械です。
ケーブルには上から順に $1$ から $N$ までの番号が、平衡器には左から順に $1$ から $M$ までの番号がついています。平衡器 $i$ はケーブル $x_i, y_i$ ($x_i &lt; y_i$) を繋ぎます。

![pic1-small-2acea94b.png](https://img.atcoder.jp/agc041/pic1-small-2acea94b.png)

各平衡器は *上* または *下* のいずれかの状態に設定します。

$1$ 枚のコインが、いずれかのケーブルに沿ってどの平衡器よりも左に位置する点から右へと流れ始めるとします。
これから、このコインはすべての平衡器のもとをちょうど一度ずつ通過します。
コインが平衡器 $i$ の位置に来たとき、次のことが起こります。

- コインがケーブル $x_i$ に沿って流れており、かつ平衡器 $i$ の状態が下であるなら、コインはケーブル $y_i$ に移ってから再び右へと流れる。
- コインがケーブル $y_i$ に沿って流れており、かつ平衡器 $i$ の状態が上であるなら、コインはケーブル $x_i$ に移ってから再び右へと流れる。
- 上記のいずれでもないなら、コインが別のケーブルに移ることはない。

平衡ネットワークの状態とは、すべての平衡器の状態を表す長さ $M$ の文字列です。
この文字列の $i$ 文字目は、平衡器 $i$ の状態が上なら `^`、下なら `v` です。

平衡ネットワークの状態が *均一的* であるとは、あるケーブル $w$ が存在して、コインがどのケーブルから流れ始めたとしてもケーブル $w$ に行き着き、これに沿って永遠に流れることをいいます。それ以外の場合、平衡ネットワークの状態は *非均一的* であるといわれます。

整数 $T$ ($1 \le T \le 2$) が与えられます。次の問いに答えてください。

- $T = 1$ の場合は、このネットワークの均一的な状態をいずれかひとつ求めるか、そのような状態が存在しないことを検出せよ。
- $T = 2$ の場合は、このネットワークの非均一的な状態をいずれかひとつ求めるか、そのような状態が存在しないことを検出せよ。

なお、いずれか $1$ 種類の問いにのみ正しく答えると部分点が得られます。

## 制約

- $2 \leq N \leq 50000$
- $1 \leq M \leq 100000$
- $1 \leq T \leq 2$
- $1 \leq x_i &lt; y_i \leq N$
- 入力中のすべての値は整数である。

## 部分点

- $T = 1$ であるようなテストケースすべてに正解すると、$800$ 点が与えられる。
- $T = 2$ であるようなテストケースすべてに正解すると、$800$ 点が与えられる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $T$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $:$
> 
> $x_M$ $y_M$

## 出力

$T = 1$ の場合は与えられたネットワークの均一的な状態をいずれかひとつ出力し、$T = 2$ の場合は非均一的な状態をいずれかひとつ出力せよ。ただし、そのような状態が存在しないなら `-1` と出力せよ。

```input1
4 5 1
1 3
2 4
1 2
3 4
2 3
```

```output1
^^^^^
```

どのケーブルから流れ始めてもコインはケーブル $1$ に行き着くため、この状態は均一的です。

![pic2-small-2acea94b.png](https://img.atcoder.jp/agc041/pic2-small-2acea94b.png)

```input2
4 5 2
1 3
2 4
1 2
3 4
2 3
```

```output2
v^^^^
```

流れ始めるケーブル次第で、コインはケーブル $1$ にもケーブル $2$ にも行き着くことがあるため、この状態は非均一的です。

![pic3final-small-2acea94b.png](https://img.atcoder.jp/agc041/pic3final-small-2acea94b.png)

```input3
3 1 1
1 2
```

```output3
-1
```

均一的な状態が存在しません。

```input4
2 1 2
1 2
```

```output4
-1
```

非均一的な状態が存在しません。