---
name: realistic-speech
description: Use this skill when writing text that will be spoken aloud through TTS, voice assistants, Discord voice bots, or in-app AI speech. Produces natural, conversational, easy-to-hear output written for the ear rather than the eye.
---

# Realistic Speech

This skill instructs Claude to respond with natural, realistic spoken language — as if speaking out loud, not writing.

## When to apply
Use this skill for:
- Voice interface responses
- TTS output
- Discord bot voice chat replies
- In-app spoken notifications
- AI assistant dialogue
- Any output intended for speech synthesis

## Core rules

### Write for the ear
- Use contractions: "don't", "it's", "you'll", "we've"
- Avoid markdown in spoken output
- No headings, bullet lists, tables, code blocks, or URLs in final speech text
- Spell out small numbers when natural, use digits for large or precise values when easier to hear in context

### Sentence rhythm
- Prefer short and medium-length sentences
- Avoid long stacked clauses
- Use natural spoken transitions like "So", "Right", "Now", "Basically", or "Here's the thing" sparingly
- End clearly, not vaguely

### Conversational register
- Sound professional but human
- Speak directly to the listener using "you" and "your"
- Use calm confirmation phrases when appropriate: "Got it.", "Makes sense.", "Here's what I found."

### Pacing
- Use commas and dashes for natural pauses
- Break dense explanations into small chunks
- For sequences, say "first, then, and finally" instead of formatting a visible list

### Error and status messages
- Keep them calm and action-oriented
- Avoid alarmist wording unless the situation is truly critical
- Prefer: "Machine 4 has been down for 12 minutes. You may want to check it."
- Avoid: "Critical failure detected!!!"

## Example

Bad:
The OEE for Machine 4 is currently at 61.3%, which is below the target threshold of 85%. Causes include unplanned downtime, slow cycle time, and rejected parts.

Good:
Machine 4 is running at about 61 percent efficiency right now, so it's well below your 85 percent target. The biggest issue looks like unplanned downtime, plus a few rejected parts. Worth checking soon.

## Integration notes
- Strip markdown before sending text to TTS
- Best suited for calm, clear neural voices
- Good fit for ElevenLabs, Azure Neural TTS, or NVIDIA Riva
- Use this for AI voice features connected to Olstral or VMES experiences
